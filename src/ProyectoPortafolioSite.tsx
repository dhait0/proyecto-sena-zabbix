import React, { useMemo, useState } from "react";


// =====================================================
// Proyecto Portafolio – v6 (panel lateral + tema naranja)
// - Menú lateral fijo para fases
// - Se quitan los botones superiores
// - Colores principales: naranja (estilo Brave)
// =====================================================

type FaseId = "analisis" | "planeacion" | "ejecucion" | "evaluacion" | "conclusiones";
type WebItem = { label: string; url: string };
type Foto = { src: string; alt: string };

export default function ProyectoPortafolioSite() {
  const [fase, setFase] = useState<FaseId>("analisis");

  const webgrafiaBase: WebItem[] = useMemo(
    () => [
      { label: "Guía de buenas prácticas", url: "https://example.com/buenas-practicas" },
      { label: "Artículo base teórica", url: "https://example.com/base-teorica" },
      { label: "Referencia técnica", url: "https://example.com/referencia-tecnica" },
    ],
    []
  );

  const fotosLugar: Foto[] = useMemo(
    () => [
      { src: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop", alt: "Evidencia 1" },
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop", alt: "Evidencia 2" },
      { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop", alt: "Evidencia 3" },
    ],
    []
  );

  // Links tipo "píldoras" en el HERO (carpetas con todos los archivos)
  const heroLinks: WebItem[] = useMemo(
    () => [
      { label: "Carpeta general", url: "https://example.com/carpeta-general" },
      { label: "Documentos", url: "https://example.com/documentos" },
      { label: "Multimedia", url: "https://example.com/multimedia" },
      { label: "Consentimientos", url: "https://example.com/consentimientos" },
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
            <h1 className="text-xl sm:text-2xl font-bold text-orange-600">Portafolio del Proyecto</h1>
            <p className="text-xs text-neutral-500">Sitio estático de presentación – evidencias por fase.</p>
          </div>
        </div>
      </header>

      {/* ===== Hero con links de carpetas (reemplaza URLs) ===== */}
      <section className="border-b border-orange-200 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700">Repositorio del proyecto</h2>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              En esta sección se encuentran los accesos a las carpetas con todos los archivos del proyecto. La navegación por fases está disponible en el panel lateral.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {heroLinks.map((l, i) => (
                <LinkPill key={i} href={l.url}>{l.label}</LinkPill>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full aspect-[4/3] rounded-2xl border bg-white shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop"
                alt="Vista previa"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 px-2 py-1 text-[10px] rounded bg-orange-700 text-white/90">Accesos directos</div>
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
          {fase === "analisis" && <FaseAnalisis fotosLugar={fotosLugar} webgrafia={webgrafiaBase} />}
          {fase === "planeacion" && <FasePlaneacion webgrafia={webgrafiaBase} />}
          {fase === "ejecucion" && <FaseEjecucion webgrafia={webgrafiaBase} />}
          {fase === "evaluacion" && <FaseEvaluacion webgrafia={webgrafiaBase} />}
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

function TablaCotizaciones() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[640px] w-full border border-neutral-200 rounded-xl overflow-hidden text-sm">
        <thead className="bg-neutral-100">
          <tr>
            <th>Proveedor</th>
            <th>Descripción</th>
            <th>Unidad</th>
            <th>Cantidad</th>
            <th>Vlr Unit.</th>
            <th>Subtotal</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {[
            { prov: "Proveedor A", desc: "Ítem 1", u: "und", qty: 2, unit: 120000, obs: "Entrega 3 días" },
            { prov: "Proveedor B", desc: "Ítem 2", u: "und", qty: 1, unit: 350000, obs: "Garantía 1 año" },
          ].map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-neutral-50">
              <td>{r.prov}</td>
              <td>{r.desc}</td>
              <td>{r.u}</td>
              <td>{r.qty}</td>
              <td>${formatNumber(r.unit)}</td>
              <td className="font-medium">${formatNumber(r.qty * r.unit)}</td>
              <td>{r.obs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CronogramaSimple() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[640px] w-full border border-neutral-200 rounded-xl overflow-hidden text-sm">
        <thead className="bg-neutral-100">
          <tr>
            <th>Actividad</th>
            <th>Responsable</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {[
            { act: "Recolección de requisitos", resp: "Equipo", ini: "2025-09-20", fin: "2025-09-22", est: "En curso" },
            { act: "Diseño de solución", resp: "Líder", ini: "2025-09-23", fin: "2025-09-28", est: "Pendiente" },
          ].map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-neutral-50">
              <td>{r.act}</td>
              <td>{r.resp}</td>
              <td>{r.ini}</td>
              <td>{r.fin}</td>
              <td>
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border text-xs">
                  <span className={
                    r.est === "En curso"
                      ? "w-2 h-2 rounded-full bg-amber-500"
                      : r.est === "Completado"
                      ? "w-2 h-2 rounded-full bg-emerald-600"
                      : "w-2 h-2 rounded-full bg-neutral-400"
                  } />
                  {r.est}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

// ======== Ejemplo de fases (simplificadas) ========
function FaseAnalisis({ fotosLugar, webgrafia }: { fotosLugar: Foto[]; webgrafia: WebItem[] }) {
  return (
    <Section title="Fase Análisis">
      <Card title="1.1 Resumen del proyecto (ES/EN)">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Resumen en Español</h4>
            <p className="text-sm text-neutral-600 mt-2">
              {/* Reemplaza este texto */}
              Este proyecto consiste en la instalación, configuración y puesta en marcha de un servidor de monitoreo  Zabbix, con el objetivo de supervisar el funcionamiento de las máquinas críticas de la empresa cliente. A través de esta solución se busca detectar fallas de manera temprana, generar alertas automáticas y garantizar la continuidad operativa de los procesos productivos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Summary in English</h4>
            <p className="text-sm text-neutral-600 mt-2">
              This project consists of the installation, configuration, and commissioning of a Zabbix monitoring server, with the aim of supervising the operation of the client company's critical machines. This solution seeks to detect faults early, generate automatic alerts, and ensure the operational continuity of production processes.
            </p>
            <div className="mt-3">
              <p className="text-sm font-medium">Audio en inglés (participación de todos los autores):</p>
              <audio className="mt-2 w-full" controls src="#">
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>
        </div>
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

      <Card title="1.5 Lugar de implementación"><Gallery fotos={fotosLugar} /></Card>
      <Card title="1.6 Infografía (marco teórico)">
        <div className="rounded-2xl border overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
            alt="Infografía marco teórico"
            className="w-full h-64 object-cover"
          />
        </div>
        <p className="text-xs text-neutral-500 mt-2">Sugerencia: exporta tu infografía a PNG o SVG e insértala aquí.</p>
      </Card>

      <Card title="1.7 Formato de acuerdo y consentimiento">
        <p className="text-sm text-neutral-700">Adjunta o enlaza tu formato firmado (PDF):</p>
        <div className="mt-2 flex gap-2">
          <a className="btn" href="#" target="_blank" rel="noreferrer">Ver/Descargar PDF</a>
          <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Plantilla</a>
        </div>
      </Card>
      <Card title="1.8 Webgrafía"><WebList items={webgrafia} /></Card>
    </Section>
  );
}

function FasePlaneacion({ webgrafia }: { webgrafia: WebItem[] }) {
  return (
    <Section title="Fase Planeación">
      <Card title="2.1 Tabla de cotizaciones (usar formato anexo)">
        <TablaCotizaciones />
        <p className="text-xs text-neutral-500 mt-2">Anexa soportes (PDF, enlaces o imágenes de cotizaciones).</p>
      </Card>

      <Card title="2.2 Cronograma de actividades (formato anexo + Microsoft To Do)">
        <CronogramaSimple />
        <div className="mt-3">
          <a className="btn" href="https://to-do.microsoft.com" target="_blank" rel="noreferrer">Abrir Microsoft To Do</a>
        </div>
      </Card>

      <Card title="2.3 Evidencias – Primer avance de implementación">
        <p className="text-sm text-neutral-700">Incluye fotos, capturas, enlaces a repositorios o prototipos.</p>
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
function formatNumber(n: number) {
  try {
    return new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(n);
  } catch {
    return String(n);
  }
}