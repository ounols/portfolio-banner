#pragma once
#include "inputMgr.h"
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
    InputMgr* m_input = nullptr;

    float m_speed = 0.2f;

    float m_currentX = 0;
    float m_currentY = 0;
};
