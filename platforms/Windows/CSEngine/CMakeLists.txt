set(PROJECT_NAME CSEngine)

add_compile_definitions(CSE_GLOBAL_SCRIPT_DISABLED)
add_compile_definitions(CSE_GLOBAL_SKINNED_ANIMATION_DISABLED)

################################################################################
# Source groups
################################################################################

file(GLOB CSENGINE_SRC
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/*/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/*/*/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/*/*/*/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/*/*/*/*/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../src/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../src/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../src/*/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../src/*/*/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../src/*/*/*/*/*.*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../src/*/*/*/*/*/*.*"
#        "${CMAKE_CURRENT_SOURCE_DIR}/../../../src/*/*/*/*/*/*/*.*"
        )

include_directories("../../../src" "../../../CSEngine/src" "../../../src/Manager" "../../../CSEngine/src/Manager")

# Exclude files from CSEngine directory to avoid conflicts
# Exclude LightMgr files from CSEngine directory to avoid conflicts
list(REMOVE_ITEM CSENGINE_SRC
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Manager/LightMgr.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Sample/FirstDemoScene.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Sample/WebDemoScene.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Manager/CameraMgr.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Manager/EngineCoreInstance.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Manager/LightMgr.h"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/Settings.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/Settings.h"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Component/LightComponent.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Manager/ScriptMgr.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Manager/ScriptMgr.h"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Component/Animation/*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Component/CustomComponent.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/Animation/*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/Loader/3DTEX/*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/Loader/DAE/*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/Loader/SCENE/*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/MoreComponentFunc.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Util/ScriptDef*"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/Object/SScriptObject.cpp"
        "${CMAKE_CURRENT_SOURCE_DIR}/../../../CSEngine/src/OGLDef.h"
)


#if("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x86")
#    link_directories(${PROJECT_NAME} "../../../CSEngine/External/Squirrel/lib/Windows/Win32")
#elseif("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x64")
#    link_directories(${PROJECT_NAME} "../../../CSEngine/External/Squirrel/lib/Windows/Win64")
#endif()

file(GLOB GLAD_SRC "glad/src/glad.c")

################################################################################
# Target
################################################################################
add_executable(${PROJECT_NAME} CSEngine.cpp CSEngine.h CSEngine.rc ${CSENGINE_SRC} ${GLAD_SRC})

use_props(${PROJECT_NAME} "${CMAKE_CONFIGURATION_TYPES}" "${DEFAULT_CXX_PROPS}")
set(ROOT_NAMESPACE CSEngine)

set_target_properties(${PROJECT_NAME} PROPERTIES
        VS_GLOBAL_KEYWORD "Win32Proj"
)
if("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x64")
    set_target_properties(${PROJECT_NAME} PROPERTIES
            INTERPROCEDURAL_OPTIMIZATION_RELEASE "TRUE"
    )
elseif("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x86")
    set_target_properties(${PROJECT_NAME} PROPERTIES
            INTERPROCEDURAL_OPTIMIZATION_RELEASE "TRUE"
    )
endif()
################################################################################
# MSVC runtime library
################################################################################
get_property(MSVC_RUNTIME_LIBRARY_DEFAULT TARGET ${PROJECT_NAME} PROPERTY MSVC_RUNTIME_LIBRARY)
if("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x86")
    string(CONCAT "MSVC_RUNTIME_LIBRARY_STR"
        $<$<CONFIG:Debug>:
            MultiThreadedDebug
        >
        $<$<NOT:$<OR:$<CONFIG:Debug>>>:${MSVC_RUNTIME_LIBRARY_DEFAULT}>
    )
elseif("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x64")
    string(CONCAT "MSVC_RUNTIME_LIBRARY_STR"
        $<$<CONFIG:Debug>:
        MultiThreadedDebug
        >
        $<$<NOT:$<OR:$<CONFIG:Debug>>>:${MSVC_RUNTIME_LIBRARY_DEFAULT}>
    )
endif()
set_target_properties(${PROJECT_NAME} PROPERTIES MSVC_RUNTIME_LIBRARY ${MSVC_RUNTIME_LIBRARY_STR})

################################################################################
# Include directories
################################################################################
# GLAD include directory (glad.h is in the same directory as CMakeLists.txt)
target_include_directories(${PROJECT_NAME} PUBLIC
    "${CMAKE_CURRENT_SOURCE_DIR}"
)
# GLAD
target_include_directories(${PROJECT_NAME} PUBLIC "${CMAKE_CURRENT_SOURCE_DIR}/glad/include")


################################################################################
# Compile definitions
################################################################################
if("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x64")
    target_compile_definitions(${PROJECT_NAME} PRIVATE
            "$<$<CONFIG:Debug>:"
                "_DEBUG;"
                "_CRT_SECURE_NO_WARNINGS;"
                "_MBCS"
            ">"
            "$<$<CONFIG:Release>:"
                "NDEBUG;"
                "_CRT_SECURE_NO_WARNINGS;"
                "_MBCS"
            ">"
            "_WINDOWS"
            )
elseif("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x86")
    target_compile_definitions(${PROJECT_NAME} PRIVATE
        "$<$<CONFIG:Debug>:"
            "_DEBUG;"
            "_CRT_SECURE_NO_WARNINGS;"
            "_MBCS"
        ">"
        "$<$<CONFIG:Release>:"
            "NDEBUG;"
            "_CRT_SECURE_NO_WARNINGS;"
            "_MBCS"
        ">"
        "WIN32;"
        "_WINDOWS"
    )
endif()

################################################################################
# Compile and link options
################################################################################
if(MSVC)
    if("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x64")
        target_compile_options(${PROJECT_NAME} PRIVATE
            $<$<CONFIG:Debug>:
                /Od
            >
            $<$<CONFIG:Release>:
                /O1;        # 크기 최적화 (속도보다 크기 우선)
                /Oi;        # 내장 함수 사용
                /Gy;        # 함수 단위 링킹 활성화
                /GL;        # 전체 프로그램 최적화 (Link Time Code Generation)
                /GF;        # 문자열 풀링 (중복 문자열 제거)
                /Gw         # 전역 데이터 최적화
            >
            /sdl;
            /W3;
            ${DEFAULT_CXX_DEBUG_INFORMATION_FORMAT};
            ${DEFAULT_CXX_EXCEPTION_HANDLING};
            /Y-
        )
    elseif("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x86")
        target_compile_options(${PROJECT_NAME} PRIVATE
            $<$<CONFIG:Debug>:
                /Od
            >
            $<$<CONFIG:Release>:
                /O1;        # 크기 최적화 (속도보다 크기 우선)
                /Oi;        # 내장 함수 사용
                /Gy;        # 함수 단위 링킹 활성화
                /GL;        # 전체 프로그램 최적화 (Link Time Code Generation)
                /GF;        # 문자열 풀링 (중복 문자열 제거)
                /Gw         # 전역 데이터 최적화
            >
            /sdl;
            /W3;
            ${DEFAULT_CXX_DEBUG_INFORMATION_FORMAT};
            ${DEFAULT_CXX_EXCEPTION_HANDLING};
            /Y-
        )
    endif()
    if("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x64")
        target_link_options(${PROJECT_NAME} PRIVATE
            $<$<CONFIG:Debug>:
                /INCREMENTAL;
                /MAP;
                /DEBUG
            >
            $<$<CONFIG:Release>:
                /OPT:REF;        # 참조되지 않는 함수/데이터 제거
                /OPT:ICF;        # 동일한 함수 병합
                /LTCG;           # 링크 타임 코드 생성 (/GL과 함께 사용)
                /INCREMENTAL:NO  # 증분 링크 비활성화
            >
            /SUBSYSTEM:WINDOWS
        )
    elseif("${CMAKE_VS_PLATFORM_NAME}" STREQUAL "x86")
        target_link_options(${PROJECT_NAME} PRIVATE
            $<$<CONFIG:Debug>:
                /INCREMENTAL;
                /MAP;
                /DEBUG
            >
            $<$<CONFIG:Release>:
                /OPT:REF;        # 참조되지 않는 함수/데이터 제거
                /OPT:ICF;        # 동일한 함수 병합
                /LTCG;           # 링크 타임 코드 생성 (/GL과 함께 사용)
                /INCREMENTAL:NO  # 증분 링크 비활성화
            >
            /SUBSYSTEM:WINDOWS
        )
    endif()
endif()

################################################################################
# Dependencies
################################################################################
# GLAD는 소스 파일로 직접 컴파일되므로 별도의 라이브러리 링크가 필요 없습니다