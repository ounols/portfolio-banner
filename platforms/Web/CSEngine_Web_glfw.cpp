// GLXBasics.c
// Use GLX to setup OpenGL windows
// Draw eyeballs
// OpenGL SuperBible, 5th Edition
// Nick Haemel

#include "../../src/Manager/MainProc.h"
#include "Manager/InputMgr.h"
#include "../../src/MacroDef.h"
#define GLFW_INCLUDE_ES3

#include <GLFW/glfw3.h>
#include <emscripten.h>
#include <emscripten/html5.h>
#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <sys/time.h>
#include <math.h>
#include <chrono>
#include <ctime>

using namespace CSE;
using std::chrono::duration_cast;
using std::chrono::milliseconds;
using std::chrono::seconds;
using std::chrono::system_clock;

long long int timeGetTime() {
    auto ms_since_epoch = duration_cast<milliseconds>(system_clock::now().time_since_epoch()).count();

    return ms_since_epoch;
}
long long int elapsedTime = 0;
GLFWwindow* window = nullptr;
MainProc* mainProc = nullptr;
InputMgr* inputMgr = nullptr;
EM_BOOL on_canvassize_changed(int eventType, const EmscriptenUiEvent* uiEvent, void* userData) {
    printf("Canvas resize event triggered! Event type: %d\n", eventType);
    if (window && mainProc) {
        int width, height;
        glfwGetFramebufferSize(window, &width, &height);
        printf("New canvas size: %dx%d\n", width, height);
        mainProc->ResizeWindow(width, height);
    }
    return EM_TRUE;
}

EM_BOOL on_window_resize(int eventType, const EmscriptenUiEvent* uiEvent, void* userData) {
    printf("Window resize event triggered!\n");
    if (window && mainProc) {
        // Get the actual canvas element and check its size
        double cssWidth, cssHeight;
        emscripten_get_element_css_size("#canvas", &cssWidth, &cssHeight);
        printf("CSS canvas size: %.0fx%.0f\n", cssWidth, cssHeight);
        
        // Update GLFW window size to match
        glfwSetWindowSize(window, (int)cssWidth, (int)cssHeight);
        mainProc->ResizeWindow((int)cssWidth, (int)cssHeight);
    }
    return EM_TRUE;
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    void resizeCanvas(int width, int height) {
        if (window && mainProc) {
            glfwSetWindowSize(window, width, height);
            InputMgr::SetCanvasSize(width, height);
            mainProc->ResizeWindow(width, height);
        }
    }
    
    EMSCRIPTEN_KEEPALIVE
    void getCanvasSize(int* width, int* height) {
        if (window) {
            glfwGetFramebufferSize(window, width, height);
            InputMgr::SetCanvasSize(*width, *height);
        }
    }
}

void mainLoop() {
    auto deltaTime = timeGetTime() - elapsedTime;
    // std::cout << deltaTime <<'\n';
    /* Render here */
    inputMgr->Update();
    mainProc->Update(deltaTime);
    mainProc->Render(deltaTime);

    /* Swap front and back buffers */
    glfwSwapBuffers(window);
    // glfwSwapInterval(0);

    /* Poll for and process events */
    glfwPollEvents();

    inputMgr->LateUpdate();
}

int main(void) {

    /* Initialize the library */
    if (!glfwInit())
        return -1;

    // glfwWindowHint(GLFW_CLIENT_API,GLFW_OPENGL_ES_API);
    // glfwWindowHint(GLFW_CONTEXT_CREATION_API,GLFW_EGL_CONTEXT_API);
    // glfwDefaultWindowHints();

    //OpenGL ES
    glfwWindowHint(GLFW_CLIENT_API, GLFW_OPENGL_ES_API);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 0);
//    glfwWindowHint(GLFW_SAMPLES, 4);


    //OpenGL core
//    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
//    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
//    glfwWindowHint(GLFW_SAMPLES, 4);
//    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    int width = 700;
    int height = 700;

    /* Create a windowed mode window and its OpenGL context */
    window = glfwCreateWindow(width, height, "CSEngine", NULL, NULL);
    if (!window) {
        glfwTerminate();
        return -1;
    }

    /* Make the window's context current */
    glfwMakeContextCurrent(window);
    InputMgr::SetCanvasSize(width, height);
    glfwSetCursorPosCallback(window, [](GLFWwindow* window, double x, double y) {
        InputMgr::CursorPositionCallback(x, y);
    });

//     glewExperimental = GL_TRUE;
//     GLenum err=glewInit();
//     if(err!=GLEW_OK) {
//         // Problem: glewInit failed, something is seriously wrong.
//         std::cout << "glewInit failed: " << glewGetErrorString(err) << std::endl;
//         return -1;
//     }

    printf("GL_VERSION  : %s\n", glGetString(GL_VERSION));
    printf("GL_RENDERER : %s\n", glGetString(GL_RENDERER));
    printf("GLSL_VERSION : %s\n", glGetString(GL_SHADING_LANGUAGE_VERSION));

    mainProc = new MainProc();
    mainProc->Init(width, height);
    elapsedTime = timeGetTime();
    inputMgr = InputMgr::getInstance();
    
    // Set up resize callbacks
    emscripten_set_resize_callback(EMSCRIPTEN_EVENT_TARGET_WINDOW, nullptr, EM_TRUE, on_window_resize);
    emscripten_set_resize_callback("#canvas", nullptr, EM_TRUE, on_canvassize_changed);
    
    /* Loop until the user closes the window */
    emscripten_set_main_loop(&mainLoop, 0, 1);
    SAFE_DELETE(mainProc);
    InputMgr::delInstance();
    glfwDestroyWindow(window);
    glfwTerminate();
    return 0;
}