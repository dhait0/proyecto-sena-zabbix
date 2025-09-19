import React, { useMemo, useState } from "react";

type FaseId = "analisis" | "planeacion" | "ejecucion" | "evaluacion" | "conclusiones";
type WebItem = { label: string; url: string };
type Foto = { src: string; alt: string };
	export default function ProyectoPortafolioSite() {
  const [fase, setFase] = useState<FaseId>("analisis");

  const webgrafiaAnalisis: WebItem[] = useMemo(
    () => [
      { label: "Manual Zabbix 7.0 (oficial)", url: "https://www.zabbix.com/documentation/current/en/manual" },
      { label: "Zabbix Agent 2 Overview", url: "https://www.zabbix.com/documentation/current/en/manual/concepts/agent2" },
      { label: "What is IT Monitoring? (Red Hat)", url: "https://www.redhat.com/en/topics/management/what-is-it-monitoring" },
      { label: "Best Practices for Infrastructure Monitoring (Datadog)", url: "https://www.datadoghq.com/blog/infrastructure-monitoring-best-practices/" }
    ],
    []
  );

  const webgrafiaPlaneacion: WebItem[] = useMemo(
    () => [
      { label: "Manual Zabbix 7.0 (oficial)", url: "https://www.zabbix.com/documentation/current/en/manual" },
      { label: "ISO/IEC 20000 – Gestión de servicios TI", url: "https://www.iso.org/standard/70636.html" },
    ],
    []
  );
  const webgrafiaEjecucion: WebItem[] = useMemo(
    () => [
      { label: "Manual Zabbix 7.0 (oficial)", url: "https://www.zabbix.com/documentation/current/en/manual" },    ],
    []
  );
  const webgrafiaEvaluacion: WebItem[] = useMemo(
    () => [
      { label: "Manual Zabbix 7.0 (oficial)", url: "https://www.zabbix.com/documentation/current/en/manual" },    ],
    []
  );
  // ⚠️ Ahora las fotos son locales (carpeta /public/media/analisis/)
  const fotosLugar: Foto[] = useMemo(
    () => [
      { src: "/media/analisis/Server-f1.jpeg", alt: "Server fisico" },
      { src: "/media/analisis/Server-f2.jpeg", alt: "Server fisico" },
      { src: "/media/analisis/Server-f3.jpeg", alt: "Server fisico" }
    ],
    []
  );
  const fotosAvancePlaneacion: Foto[] = useMemo(
    () => [
      { src: "/media/planeacion/serverweb.jpeg", alt: "Server web zabbix" },
      { src: "/media/planeacion/terminal.jpeg", alt: "Server Terminal zabbix" },
      { src: "/media/planeacion/serverwebequip.jpeg", alt: "Server web equipos" },
    ],
    []
  );
  // Links tipo "píldoras" en el HERO (carpetas con todos los archivos)
  const heroLinks: WebItem[] = useMemo(
    () => [
      { label: "Carpeta Drive general", url: "https://drive.google.com/drive/folders/1SlzNIQRXi93N_Izx2rUmKrtekDkwat0d?usp=drive_link" },
      { label: "proyecto en git hub", url: "https://github.com/dhait0/proyecto-sena-zabbix" }
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-neutral-900 font-sans">
      {/* ===== Header simple ===== */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo del SENA"
              className="w-12 h-12"
            />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-orange-600">Portafolio del Proyecto "Servidor Zabbix para la Continuidad Operativa de Equipos Críticos"</h1>
            <p className="text-xs text-neutral-500">Sitio estático de presentación – evidencias por fase.</p>
          </div>
        </div>
      </header>

      {/* ===== Hero con links de carpetas (reemplaza URLs) ===== */}
      <section className="border-b border-orange-200 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700">Servidor Zabbix para la Continuidad Operativa de Equipos Críticos</h2>
            <p className="mt-1 text-neutral-700">
            Proyecto realizado por Esteban Herrera y Santiago Camargo
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {heroLinks.map((l, i) => (
                <LinkPill key={i} href={l.url}>{l.label}</LinkPill>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full aspect-[4/3] rounded-2xl border bg-white shadow-md overflow-hidden">
              <img
                src="/media/hero/preview.png"
                alt="Vista previa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Layout con sidebar ===== */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-12 gap-6">
        {/* Sidebar lateral */}
        <aside className="md:col-span-3 lg:col-span-2">
          <div className="sticky top-24 flex flex-col gap-2">
            <FaseItem active={fase === "analisis"} onClick={() => setFase("analisis")} label="Fase Análisis" />
            <FaseItem active={fase === "planeacion"} onClick={() => setFase("planeacion")} label="Fase Planeación" />
            <FaseItem active={fase === "ejecucion"} onClick={() => setFase("ejecucion")} label="Fase Ejecución" />
            <FaseItem active={fase === "evaluacion"} onClick={() => setFase("evaluacion")} label="Fase Evaluación" />
            <FaseItem active={fase === "conclusiones"} onClick={() => setFase("conclusiones")} label="Conclusiones" />
          </div>
        </aside>

        {/* Contenido dinámico */}
        <section className="md:col-span-9 lg:col-span-10 space-y-6">
          {fase === "analisis" && <FaseAnalisis fotosLugar={fotosLugar} webgrafia={webgrafiaAnalisis} />}
          {fase === "planeacion" && (<FasePlaneacion webgrafia={webgrafiaPlaneacion} fotosAvance={fotosAvancePlaneacion} />)}
          {fase === "ejecucion" && <FaseEjecucion webgrafia={webgrafiaEjecucion} />}
          {fase === "evaluacion" && <FaseEvaluacion webgrafia={webgrafiaEvaluacion} />}
          {fase === "conclusiones" && <FaseConclusiones />}
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer id="contacto" className="bg-orange-700 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="text-sm text-white/90 mt-1">Para información adicional sobre el proyecto, el contacto se realiza por los canales institucionales.</p>
          </div>
          <div className="flex gap-2 justify-start md:justify-end flex-wrap">
            <LinkPill invert href="#">LinkedIn</LinkPill>
            <LinkPill invert href="#">GitHub</LinkPill>
            <LinkPill invert href="#">Correo</LinkPill>
          </div>
        </div>
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white/70 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Portafolio del Proyecto</span>
            <span>React · TypeScript · Tailwind v4 · Cloudflare Pages</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


// ======== Helpers ========
function FaseItem({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full text-left px-3 py-2 rounded-md text-sm",
        active ? "bg-orange-600 text-white" : "bg-orange-100 hover:bg-orange-200 text-orange-700",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-orange-700 border-b border-orange-200 pb-2">{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-orange-100 bg-white p-5 shadow-md hover:shadow-lg transition">
      {title && <h3 className="text-lg font-semibold mb-2 text-orange-900">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

function LinkPill({ href, children, invert = false }: { href: string; children: React.ReactNode; invert?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? "_self" : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className={[
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs",
        invert ? "border-white/60 text-white bg-transparent hover:bg-white/10" : "border-orange-300 text-orange-800 bg-white hover:bg-orange-50",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function WebList({ items }: { items: WebItem[] }) {
  return (
    <ul className="list-disc pl-6 text-sm text-neutral-700 space-y-1">
      {items.map((it, idx) => (
        <li key={idx}>
          <a className="underline text-orange-700 hover:text-orange-900" href={it.url} target="_blank" rel="noreferrer">
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Gallery({ fotos }: { fotos: Foto[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {fotos.map((f, i) => (
        <figure key={i} className="overflow-hidden rounded-xl border shadow-sm">
          <img src={f.src} alt={f.alt} className="w-full h-44 object-cover hover:scale-105 transition-transform" />
          <figcaption className="p-2 text-xs text-neutral-600">{f.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

// ======== Utilidades ========
function PdfPreview({ src, height = 480, title, downloadName }: { src: string; height?: number; title?: string; downloadName?: string }) {
  return (
    <div className="space-y-2">
      {title && <p className="text-sm text-neutral-600">{title}</p>}
      {/* Intento 1: iframe para vista previa */}
      <div className="rounded-xl border overflow-hidden bg-neutral-50">
        <iframe
          title={title || "Vista previa PDF"}
          src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full"
          style={{ height }}
        />
      </div>
      {/* Fallback / acciones */}
      <div className="flex items-center gap-2">
        <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm hover:bg-orange-50" href={src} target="_blank" rel="noreferrer">
          Abrir en pestaña nueva
        </a>
        <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm hover:bg-orange-50" href={src} download={downloadName || true}>
          Descargar
        </a>
      </div>
    </div>
  );
}


// ======== Ejemplo de fases (simplificadas) ========
function FaseAnalisis({ fotosLugar, webgrafia }: { fotosLugar: Foto[]; webgrafia: WebItem[] }) {
  return (
    <Section title="Fase Análisis">
      {/* 1.1 Resumen + Audio */}
      <Card title="1.1 Resumen del proyecto (ES/EN)">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Resumen en Español</h4>
            <p className="text-sm text-neutral-600 mt-2">
              Este proyecto consiste en la instalación, configuración y puesta en marcha de un servidor de monitoreo Zabbix, con el objetivo de supervisar el funcionamiento de las máquinas críticas de la empresa cliente. A través de esta solución se busca detectar fallas de manera temprana, generar alertas automáticas y garantizar la continuidad operativa de los procesos productivos.
            </p>
            <div className="mt-3">
              <p className="text-sm font-medium">Audio en español e inglés (Juan Esteban Herrera):</p>
              <audio className="mt-2 w-full" controls src="/media/analisis/20250918-h-audio.mp4">
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Summary in English</h4>
            <p className="text-sm text-neutral-600 mt-2">
              This project consists of the installation, configuration, and commissioning of a Zabbix monitoring server, with the aim of supervising the operation of the client company's critical machines. This solution seeks to detect faults early, generate automatic alerts, and ensure the operational continuity of production processes.
            <br/>
            <br/>
            </p>
            <div className="mt-3">
              <p className="text-sm font-medium">Audio en español e inglés (Joseph santiago Camargo):</p>
              <audio className="mt-2 w-full" controls src="/media/analisis/20250918-s-audio.mp4">
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>
        </div>
      </Card>

      {/* 1.1 (extra) Vista previa de PDF LOCAL */}
      <Card title="1.1.1 Vista previa del PDF">
        <PdfPreview src="/media/analisis/resumen.pdf" height={520} title="Resumen del proyecto – PDF" downloadName="ResumenProyecto.pdf" />
      </Card>

      <Card title="1.2 Descripción del problema"><p className="text-sm text-neutral-700">La organización no cuenta con un sistema centralizado de monitoreo para las máquinas críticas utilizadas en los procesos productivos. Esta carencia provoca que las fallas en los equipos pasen desapercibidas hasta que generan paradas no planificadas, lo que impacta de forma negativa la producción, incrementa los costos operativos y reduce la eficiencia del personal de mantenimiento.
La falta de alertas en tiempo real dificulta la detección temprana de problemas como sobrecargas de CPU, fallas en discos duros, caídas de red o interrupción de servicios. Esta situación ocasiona tiempos de respuesta prolongados, pérdidas de producción y limita la capacidad de la empresa para planificar adecuadamente el mantenimiento preventivo.
</p></Card>

      <Card title="1.3 Objetivo del proyecto">
        <ul className="list-disc pl-6 text-sm text-neutral-700 space-y-1">
          <li><span className="font-medium">General: Implementar una solución de monitoreo centralizado mediante Zabbix Server</span> …</li>
          <li><span className="font-medium">Específicos:     * Instalar y configurar Zabbix Server en un servidor Linux. <br/>
* Crear agentes en cada máquina crítica para recopilar métricas.<br/>
* Definir umbrales de alerta y notificaciones.<br/>
* Capacitar al personal del cliente en el uso básico de la plataforma.
</span> …</li>
        </ul>
      </Card>

      <Card title="1.4 Alcance del proyecto">
        <p className="text-sm text-neutral-700">El proyecto abarca la implementación de un sistema de monitoreo basado en Zabbix Server para la supervisión de las máquinas críticas de la organización.
<br/><br/>El alcance incluye:<br/>
Instalación y configuración de Zabbix Server en un servidor dedicado o máquina virtual.<br/>
Configuración de agentes Zabbix en las máquinas críticas para el monitoreo de parámetros como uso de CPU, memoria, estado de disco, conectividad de red y servicios esenciales.<br/>
Creación de paneles de control (dashboards) que muestren el estado en tiempo real de los equipos.<br/>
Configuración de alertas automáticas por correo electrónico o mensajería para notificar al personal de TI y mantenimiento sobre fallas o eventos críticos.<br/>
Capacitación básica al personal encargado sobre el uso de Zabbix, interpretación de alertas y generación de reportes.
</p>
      </Card>

      {/* 1.5: Galería con imágenes LOCALES */}
      <Card title="1.5 Lugar de implementación"><Gallery fotos={fotosLugar} /></Card>
      <Card title="1.6 Infografía (marco teórico)">
        <PdfPreview src="/media/analisis/Marco-teorico.pdf" downloadName="Marco-teorico.pdf" />      
      </Card>
      <Card title="1.7 Formato de acuerdo y consentimiento">
        <PdfPreview src="/media/analisis/formato_AC.pdf" height={520} title="Resumen del proyecto – PDF" downloadName="ResumenProyecto.pdf" />
      </Card>
      <Card title="1.8 Webgrafía"><WebList items={webgrafia} /></Card>
    </Section>
  );
}

function FasePlaneacion({ webgrafia, fotosAvance }: { webgrafia: WebItem[]; fotosAvance: Foto[] }) {
  return (
    <Section title="Fase Planeación">
      <Card title="2.1 Tabla de cotizaciones">
        <PdfPreview src="/media/planeacion/cotizaciones.pdf" height={520} title="tabla de cotizaciones.pdf" downloadName="Tabla de cotizaciones.pdf" />
      </Card>

      <Card title="2.2 Cronograma de actividades">
        <PdfPreview src="/media/planeacion/Cronograma.pdf" height={520} title="Cronograma de actividades.pdf" downloadName="Cronograma de actividades.pdf" />
      </Card>

      <Card title="2.3 Evidencias – Primer avance de implementación">
        <div className="mt-3">
          <Gallery fotos={fotosAvance} />
        </div>
      </Card>

      <Card title="2.4 Webgrafía">
        <WebList items={webgrafia} />
      </Card>
    </Section>
  );
}

function FaseEjecucion({ webgrafia }: { webgrafia: WebItem[] }) {
  return (
    <Section title="Fase Ejecución">
      <Card title="3.1 Formatos"><LinkPill href="#">Carpeta de formatos</LinkPill></Card>
      <Card title="3.2 Evidencias multimediales"><LinkPill href="#">Galería</LinkPill></Card>
      <Card title="3.3 Webgrafía"><WebList items={webgrafia} /></Card>
    </Section>
  );
}

function FaseEvaluacion({ webgrafia }: { webgrafia: WebItem[] }) {
  return (
    <Section title="Fase Evaluación">
      <Card title="4.1 Carta de satisfacción"><LinkPill href="#">Ver carta</LinkPill></Card>
      <Card title="4.2 Recomendaciones"><p className="text-sm text-neutral-700">Mejoras y mantenimiento.</p></Card>
      <Card title="4.3 Evidencias"><LinkPill href="#">Carpeta</LinkPill></Card>
      <Card title="4.4 Webgrafía"><WebList items={webgrafia} /></Card>
    </Section>
  );
}

function FaseConclusiones() {
  return (
    <Section title="Conclusiones generales">
      <Card title="Síntesis de resultados"><p className="text-sm text-neutral-700">Impactos, aprendizajes y próximos pasos.</p></Card>
    </Section>
  );
}

