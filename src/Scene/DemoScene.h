#pragma once
#include "Base/Scene.h"
#include "Util/Quaternion.h"

namespace CSE {
    class LightComponent;
}

namespace CSE {
    class SGameObject;
}

class DemoScene : public CSE::Scene {
public:
    DemoScene() = default;
    ~DemoScene() override = default;

    void Init() override;
    void Tick(float elapsedTime) override;

    static void TickGameObject(CSE::SGameObject *obj, float elapsedTime);

    void Destroy() override;

private:
    CSE::SGameObject* m_root = nullptr;
    CSE::SGameObject* m_lucy = nullptr;
    CSE::SGameObject* m_text = nullptr;
    CSE::LightComponent*  m_mainLight = nullptr;
    CSE::LightComponent*  m_subLight = nullptr;

    CSE::Quaternion m_textRotation;
};
