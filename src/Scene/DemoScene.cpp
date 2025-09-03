//
// Created by ounol on 2025-08-31.
//

#include "DemoScene.h"

#include "Component/CameraComponent.h"
#include "Component/LightComponent.h"
#include "Component/RenderComponent.h"
#include "Object/SGameObject.h"
#include "Object/SPrefab.h"
#include "Util/Render/SMaterial.h"

using namespace CSE;

void DemoScene::Init() {
    m_input = InputMgr::getInstance();

    SPrefab* lucy_prefab = SResource::Create<SPrefab>("lucy.prefab");
    SPrefab* cylinder_prefab = SResource::Create<SPrefab>("cylinder.prefab");

    m_root = new SGameObject("root");
    m_tf = new SGameObject("Object Transform");
    m_tf->SetParent(m_root);
    m_lucy = lucy_prefab->Clone(vec3{0, -1.5f, 0.f}, m_tf);
    m_lucy->GetTransform()->m_scale = vec3{0.013f, 0.013f, 0.013f};

    m_text = cylinder_prefab->Clone(vec3{0.f, -0.3f, 0.f}, m_tf);
    RenderComponent* render_comp = nullptr;
    for (const auto& child: m_text->GetChildren()) {
        const auto& render = child->GetComponent<RenderComponent>();
        if (render != nullptr) {
            render_comp = render;
            break;
        }
    }
    if (render_comp != nullptr) {
        render_comp->SetMaterial(SResource::Create<SMaterial>("0VvJKDjFbxjn5U0w"));
    }
    m_text->GetTransform()->m_scale = vec3{0.7f, 0.7f, 0.15f};
    m_textRotation = Quaternion::AngleAxis(vec3{-1, 0, 0}, 1.8f);
    m_text->GetTransform()->m_rotation = m_textRotation;

    m_tf->GetTransform()->m_position = vec3{0.1f, 0.f, -1.f};
    vec3 rotate = vec3{0.07f, 0.3f, 0.1f};
    rotate.Normalize();
    m_tfRotation = Quaternion::AngleAxis(rotate, 1.0f);
    m_tf->GetTransform()->m_rotation = m_tfRotation;

    auto camera = new SGameObject("camera");
    const auto& camera_comp = camera->CreateComponent<CameraComponent>();
    camera_comp->SetPerspectiveFov(10);
    camera->GetTransform()->m_position = vec3{0, -0.1f, 3.f};
    camera_comp->SetBackgroundType(CameraBase::SOLID);
    camera_comp->SetBackgroundColor(vec3{0, 0, 0});
    camera->SetParent(m_root);

    SGameObject* direction = new SGameObject();
    direction->SetParent(m_root);
    direction->SetName("Main directional");
    m_mainLight = direction->CreateComponent<LightComponent>();
    m_mainLight->SetLightType(LightComponent::DIRECTIONAL);
    vec3 direction_vec = vec3{1.f, 1.f, 0.f};
    direction_vec.Normalize();
    m_mainLight->SetDirection(vec4(direction_vec, 1.0f));
    m_mainLight->SetShadow(true);
    m_mainLight->SetLightRadius(10.f);
    m_mainLight->SetColor(vec3{30, 30, 30});
    m_mainLight->Init();

    SGameObject* direction2 = new SGameObject();
    direction2->SetParent(m_root);
    direction2->SetName("Sub directional");
    m_subLight = direction2->CreateComponent<LightComponent>();
    m_subLight->SetLightType(LightComponent::DIRECTIONAL);
    m_subLight->SetDirection(vec4(0.5f, -0.5f, 0.f, 1.0f));
    m_subLight->SetShadow(false);
    m_subLight->SetLightRadius(10.f);
    m_subLight->Init();
}

void DemoScene::Tick(float elapsedTime) {
    TickGameObject(m_root, elapsedTime);
    float t = elapsedTime * 0.001f;
    vec3 direction_vec = vec3{cosf(t) * 0.5f - 0.5f, sinf(t) * 0.5f + 0.5f, -1.5f};
    direction_vec.Normalize();
    m_mainLight->SetDirection(vec4(direction_vec, 1.0f));
    float dot = fmax(direction_vec.Dot(vec3{-1.f, 0.5f, 0.f}), 0.f);

    m_subLight->SetColor(vec3{0.9f, 0.9f, 0.92f} * dot * 4.f);
    m_lucy->GetTransform()->m_rotation = Quaternion::AngleAxis(vec3{0.f, 1.f, 0.f}, sinf(t * 0.5f) * 0.1f);
    m_text->GetTransform()->m_rotation = Quaternion::AngleAxis(vec3{0, 0, 1}, t * 0.1f).Multiplied(m_textRotation);

    if (m_input->IsMouseFocus()) {
        m_currentX = m_input->GetX();
        m_currentY = m_input->GetY();
    }

    m_tf->GetTransform()->m_rotation = m_tfRotation.Multiplied(Quaternion::AngleAxis(vec3{m_currentY, m_currentX, 0.f}, 0.05f));
}

void DemoScene::TickGameObject(CSE::SGameObject* obj, float elapsedTime) {
    obj->Tick(elapsedTime);
    const auto& children = obj->GetChildren();
    for (const auto& child: children) {
        TickGameObject(child, elapsedTime);
    }
}

void DemoScene::Destroy() {
}
