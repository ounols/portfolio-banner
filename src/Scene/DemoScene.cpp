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
    SPrefab* stormtrooper = SResource::Create<SPrefab>("lucy.prefab");

    m_root = new SGameObject("root");
    auto ab = stormtrooper->Clone(vec3{ 0, -1.f, -1.f }, m_root);
    //    ab->GetTransform()->m_scale = vec3{ 0.2f, 0.2f, 0.2f };
    ab->GetTransform()->m_scale = vec3{ 0.01f, 0.01f, 0.01f };
    // ab->GetTransform()->m_rotation = Quaternion::AngleAxis(vec3{1, 0, 0}, Pi/2.f);

    auto camera = new SGameObject("camera");
    const auto& camera_comp = camera->CreateComponent<CameraComponent>();
    camera->GetTransform()->m_position = vec3{0, 0, 1.2f };
    camera_comp->SetBackgroundType(CameraBase::SOLID);
    camera_comp->SetBackgroundColor(vec3 {0, 0, 0});

    SGameObject* direction = new SGameObject();
    direction->SetParent(m_root);
    direction->SetName("directional");
    direction->GetTransform()->m_position = vec3{ 0.f, 0.5f, 0.f };
    direction->CreateComponent<LightComponent>();
    direction->GetComponent<LightComponent>()->SetLightType(LightComponent::DIRECTIONAL);
    direction->GetComponent<LightComponent>()->SetDirection(vec4{ 0.0f, 1.0f, 1, 0 });
    direction->GetComponent<LightComponent>()->SetShadow(true);
}

void DemoScene::Tick(float elapsedTime) {
    TickGameObject(m_root, elapsedTime);
}

void DemoScene::TickGameObject(CSE::SGameObject *obj, float elapsedTime) {
    obj->Tick(elapsedTime);
    const auto& children = obj->GetChildren();
    for (const auto& child : children) {
        TickGameObject(child, elapsedTime);
    }
}

void DemoScene::Destroy() {
}
