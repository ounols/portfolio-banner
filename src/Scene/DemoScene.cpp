//
// Created by ounol on 2025-08-31.
//

#include "DemoScene.h"

#include "Component/CameraComponent.h"
#include "Component/LightComponent.h"
#include "Object/SGameObject.h"
#include "Object/SPrefab.h"

using namespace CSE;

void DemoScene::Init() {
    SPrefab* lucy_prefab = SResource::Create<SPrefab>("lucy.prefab");

    m_root = new SGameObject("root");
    auto object_transform = new SGameObject("Object Transform");
    object_transform->SetParent(m_root);
    m_lucy = lucy_prefab->Clone(vec3{0, -1.5f, 0.f}, object_transform);
    //    ab->GetTransform()->m_scale = vec3{ 0.2f, 0.2f, 0.2f };
    m_lucy->GetTransform()->m_scale = vec3{0.013f, 0.013f, 0.013f};
    object_transform->GetTransform()->m_position = vec3{0.f, 0.f, -1.f};
    vec3 rotate = vec3{0.1f, 0.3f, 0.1f};
    rotate.Normalize();
    object_transform->GetTransform()->m_rotation = Quaternion::AngleAxis(rotate, 1.0f);

    auto camera = new SGameObject("camera");
    const auto& camera_comp = camera->CreateComponent<CameraComponent>();
    camera->GetTransform()->m_position = vec3{0, 0, 1.2f};
    camera_comp->SetBackgroundType(CameraBase::SOLID);
    camera_comp->SetBackgroundColor(vec3{0, 0, 0});

    SGameObject* direction = new SGameObject();
    direction->SetParent(m_root);
    direction->SetName("Main directional");
    // direction->GetTransform()->m_position = vec3{ 1.f, 1.f, 0.f };
    m_mainLight = direction->CreateComponent<LightComponent>();
    m_mainLight->SetLightType(LightComponent::DIRECTIONAL);
    vec3 direction_vec = vec3{1.f, 1.f, 0.f};
    direction_vec.Normalize();
    m_mainLight->SetDirection(vec4(direction_vec, 1.0f));
    m_mainLight->SetShadow(true);
    m_mainLight->SetLightRadius(10.f);
    m_mainLight->SetColor(vec3{20, 20, 20});
    m_mainLight->Init();

    SGameObject* direction2 = new SGameObject();
    direction2->SetParent(m_root);
    direction2->SetName("Sub directional");
    // direction->GetTransform()->m_position = vec3{ 1.f, 1.f, 0.f };
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
    vec3 direction_vec = vec3{cosf(t), sinf(t), -0.9f};
    direction_vec.Normalize();
    m_mainLight->SetDirection(vec4(direction_vec, 1.0f));
    float dot = direction_vec.Dot(vec3{-1.f, 0.5f, 0.f});

    dot = dot * 0.5f + 0.25f;
    m_subLight->SetColor(vec3{0.9f, 0.9f, 0.92f} * dot);

    m_lucy->GetTransform()->m_rotation = Quaternion::AngleAxis(vec3 {0.f, 1.f, 0.f}, sinf(t * 0.5f) * 0.1f);
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
