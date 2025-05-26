// Cybersecurity Portfolio Website for Sai Kiran Mididoddi
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Sai Kiran Mididoddi</h1>
        <p className="text-lg text-gray-700 mb-4">Cybersecurity Analyst | Threat Hunter | DFIR Specialist</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:saikiranmididoddi@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/sai-kiran-mididoddi" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/SaiKiran449" target="_blank" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I’m a cybersecurity professional with 5+ years of experience in threat detection, incident response, and threat intelligence. I've worked with Tesla, CyberEye, and iBuild Innovations, leading initiatives in SOC alert triage, crypto scam investigations, and infrastructure security. I specialize in DFIR, purple teaming, threat modeling, and SIEM/EDR integrations, and hold certifications including Security+ and BTL1.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">CrimeOS</h3>
              <p className="text-gray-700 mb-2">
                Developed a threat intelligence and cybercrime investigation platform that automated detection of phishing, fraud, and impersonation scams—handling 10K+ indicators/month.
              </p>
              <a href="https://crimeos.ai" className="text-blue-600 underline">Visit Project</a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">IoT Infrastructure Security</h3>
              <p className="text-gray-700 mb-2">
                Secured 100+ AWS-hosted IoT servers using Kibana, pfSense, and OSSEC. Developed dashboards to monitor DNS anomalies and reduce downtime with proactive alerting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Tesla Threat Hunting</h3>
              <p className="text-gray-700 mb-2">
                Led threat hunting for crypto scams targeting Tesla's ecosystem. Mapped adversary TTPs to MITRE ATT&CK and enriched Chronicle SIEM alerts to reduce MTTR by 30%.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications & Education</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>CompTIA Security+ (SY0-701)</li>
          <li>Blue Team Level 1 (BTL1)</li>
          <li>Microsoft Azure Fundamentals (AZ-900)</li>
          <li>M.S. in Cybersecurity, University of Central Missouri (2025)</li>
          <li>B.Tech in Computer Science, AP IIIT RGUKT RK Valley</li>
        </ul>
      </section>
    </main>
  );
}

