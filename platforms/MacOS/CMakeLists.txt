# Sets the minimum version of CMake required to build the native library.

cmake_minimum_required(VERSION 3.4.1)

PROJECT(CSEngine)
SET(CMAKE_VERBOSE_MAKEFILE true)
SET(CMAKE_CXX_STANDARD 14)
set(CMAKE_BUILD_TYPE Debug)

link_directories(/usr/lib)
link_directories(/usr/lib32)
link_directories(/usr/local/lib)

find_package(glfw3 REQUIRED)
find_package(OpenGL REQUIRED)


include_directories(${OPENGL_INCLUDE_DIR})

#find_package(PkgConfig REQUIRED)
#pkg_search_module(GLFW REQUIRED glfw3)
#include_directories(${GLFW_INCLUDE_DIRS})
#target_link_libraries(CSEngine ${GLFW_LIDRARIES})

file(GLOB CSENGINE_SRC
        "../../CSEngine/src/*.*"
        "../../CSEngine/src/*/*.*"
        "../../CSEngine/src/*/*/*.*"
        "../../CSEngine/src/*/*/*/*.*"
        "../../CSEngine/src/*/*/*/*/*.*"
        "../../CSEngine/src/*/*/*/*/*/*.*"
        "../../src/*.*"
        "../../src/*/*.*"
        "../../src/*/*/*.*"
        "../../src/*/*/*/*.*"
        "../../src/*/*/*/*/*.*"
        "../../src/*/*/*/*/*/*.*"
        )

include_directories("../../src" "../../CSEngine/src" "../../src/Manager" "../../CSEngine/src/Manager")

# Exclude LightMgr files from CSEngine directory to avoid conflicts
list(REMOVE_ITEM CSENGINE_SRC
        "${CMAKE_CURRENT_SOURCE_DIR}/../../CSEngine/src/Manager/LightMgr.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../CSEngine/src/Manager/CameraMgr.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../CSEngine/src/Manager/EngineCoreInstance.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../CSEngine/src/Manager/LightMgr.h"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../CSEngine/src/Util/Settings.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../CSEngine/src/Component/LightComponent.cpp"
)

file(GLOB SQUIRREL_SRC
        "../../CSEngine/External/Squirrel/lib/sqstdlib/*.*"
        "../../CSEngine/External/Squirrel/lib/squirrel/*.*")


# file(GLOB GL3W_SRC "gl3w/*.c")


# add_library( CSEngineLib
#               SHARED
#               ${CSENGINE_SRC} )


add_library(SquirrelLib
        SHARED
        ${SQUIRREL_SRC})


add_executable(CSEngine CSEngine_MacOS.cpp glad/src/glad.c ${CSENGINE_SRC})

#헤더파일 위치
include_directories(/usr/include)
include_directories(/usr/local/include)
include_directories(../../CSEngine/External/Squirrel/include)
include_directories(glad/include)
include_directories(${GLEW_INCLUDE_DIRS})

target_link_libraries(CSEngine glfw)
target_link_libraries(CSEngine SquirrelLib)