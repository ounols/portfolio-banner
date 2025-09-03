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
const long long int TARGET_FRAME_TIME = 33; // 30 FPS (1000ms / 30 = 33.33ms)
const float RENDER_SCALE = 0.7f;

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
        
        // Update GLFW window size to match
        int renderWidth = (int)(cssWidth * RENDER_SCALE);
        int renderHeight = (int)(cssHeight * RENDER_SCALE);

        printf("CSS canvas size: %dx%d\n", renderWidth, renderHeight);

        glfwSetWindowSize(window, renderWidth, renderHeight);
        mainProc->ResizeWindow(renderWidth, renderHeight);

        // Apply canvas size with renderWidth and renderHeight
        char canvasCommand[256];
        snprintf(canvasCommand, sizeof(canvasCommand), 
                "document.getElementById('canvas').width=%d; "
                "document.getElementById('canvas').height=%d;", 
                renderWidth, renderHeight);
        emscripten_run_script(canvasCommand);
        
    }
    return EM_TRUE;
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    void resizeCanvas(int width, int height) {
        if (window && mainProc) {
            int renderWidth = (int)(width * RENDER_SCALE);
            int renderHeight = (int)(height * RENDER_SCALE);
            glfwSetWindowSize(window, renderWidth, renderHeight);
            InputMgr::SetCanvasSize(width, height); // UI는 원래 크기 사용
            mainProc->ResizeWindow(renderWidth, renderHeight);
        }
    }
    
    EMSCRIPTEN_KEEPALIVE
    void getCanvasSize(int* width, int* height) {
        if (window) {
            int renderWidth = (int)(*width * RENDER_SCALE);
            int renderHeight = (int)(*height * RENDER_SCALE);
            glfwSetWindowSize(window, renderWidth, renderHeight);
            InputMgr::SetCanvasSize(*width, *height); // UI는 원래 크기 사용
            mainProc->ResizeWindow(renderWidth, renderHeight);
        }
    }
}

void mainLoop() {
    // Update elapsed time for consistent frame-based timing
    elapsedTime += TARGET_FRAME_TIME;
    
    /* Render here */
    inputMgr->Update();
    mainProc->Update(elapsedTime); // Use consistent frame time
    mainProc->Render(elapsedTime);

    /* Swap front and back buffers */
    glfwSwapBuffers(window);

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

    // Get canvas size from HTML element
    double cssWidth, cssHeight;
    emscripten_get_element_css_size("#canvas", &cssWidth, &cssHeight);
    
    int width = (int)cssWidth;
    int height = (int)cssHeight;
    
    // Default fallback if canvas size is invalid
    if (width <= 0) width = 700;
    if (height <= 0) height = 700;
    
    // Apply render scale to actual framebuffer size
    int renderWidth = (int)(width * RENDER_SCALE);
    int renderHeight = (int)(height * RENDER_SCALE);

    printf("New canvas size: %dx%d\n", renderWidth, renderHeight);

    /* Create a windowed mode window and its OpenGL context */
    window = glfwCreateWindow(renderWidth, renderHeight, "CSEngine", NULL, NULL);
    if (!window) {
        glfwTerminate();
        return -1;
    }

    /* Make the window's context current */
    glfwMakeContextCurrent(window);
    InputMgr::SetCanvasSize(width, height); // UI는 CSS 크기 사용
    glfwSetCursorPosCallback(window, [](GLFWwindow* window, double x, double y) {
        // 마우스 좌표를 렌더 스케일에 맞게 변환
        InputMgr::CursorPositionCallback(x / RENDER_SCALE, y / RENDER_SCALE);
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
    mainProc->Init(renderWidth, renderHeight); // 실제 렌더 크기로 초기화
    inputMgr = InputMgr::getInstance();
    
    // Set up resize callbacks
    emscripten_set_resize_callback(EMSCRIPTEN_EVENT_TARGET_WINDOW, nullptr, EM_TRUE, on_window_resize);
    emscripten_set_resize_callback("#canvas", nullptr, EM_TRUE, on_canvassize_changed);
    
    /* Loop until the user closes the window */
    emscripten_set_main_loop(&mainLoop, 30, 1); // Set to 30 FPS
    SAFE_DELETE(mainProc);
    InputMgr::delInstance();
    glfwDestroyWindow(window);
    glfwTerminate();
    return 0;
}