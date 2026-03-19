'use client';

import { useState } from 'react';
import { 
  Database, 
  Users, 
  Zap, 
  FileText, 
  Webhook, 
  Shield, 
  Activity,
  Phone,
  Target,
  BarChart3,
  Calendar,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Sparkles,
  Boxes,
  ArrowRight
} from 'lucide-react';

type TabType = 'overview' | 'ucx' | 'v6' | 'comparison';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-green-950/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Comparativa de Plataformas CRM
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              Diferencias entre uc-uCRM (UCX) y uc-CRM-Omni (v6)
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              UCX como plataforma moderna y extensible vs v6 como CRM operativo orientado a campañas
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Resumen' },
              { id: 'ucx', label: 'UCX (uc-uCRM)' },
              { id: 'v6', label: 'v6 (uc-CRM-Omni)' },
              { id: 'comparison', label: 'Comparativa' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-brand-500 text-brand-600 dark:text-brand-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'ucx' && <UCXSection />}
        {activeTab === 'v6' && <V6Section />}
        {activeTab === 'comparison' && <ComparisonSection />}
      </div>
    </main>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Dos Enfoques, Un Objetivo
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Ambos sistemas cubren necesidades dentro de un contact center, pero responden a modelos distintos de solución.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* UCX Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100/50 dark:border-blue-900/50">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">uc-uCRM (UCX)</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Plataforma Moderna</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              CRM extensible con modelo de datos dinámico y capacidad de adaptación a distintos negocios.
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Extensible:</strong> Módulos dinámicos y entidades personalizadas</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Modelo dinámico:</strong> Form Builder sin límites</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Integrable:</strong> Webhooks y arquitectura event-driven</span>
              </div>
            </div>
          </div>
        </div>

        {/* V6 Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50 dark:border-green-900/50">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">uc-CRM-Omni (v6)</h3>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">CRM Operativo</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Orientado a la operación de campañas con estructuras predefinidas y foco en la gestión de agentes.
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Orientado a campañas:</strong> Gestión nativa y avanzada</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Operativo:</strong> Asignación y distribución automática</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Estructura fija:</strong> Reportes JasperReports robustos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UCXSection() {
  const features: Array<{
    icon: React.ElementType;
    title: string;
    color: 'blue' | 'green';
    details: string[];
  }> = [
    {
      icon: Users,
      title: 'Gestión de Contactos',
      color: 'blue',
      details: [
        'Perfil completo con campos personalizados dinámicos',
        'Vista 360°: perfil, notas, calendario, timeline e interacciones en un único lugar',
        'Zona horaria por contacto',
        'Asignación de responsable (owner) y workflows de reasignación',
        'Constructor de filtros avanzado (condiciones múltiples con AND/OR)',
        'Operaciones masivas: actualización, eliminación, importación CSV/Excel',
        'Deduplicación automática con resolución de conflictos campo por campo',
        'Generación de listas para dialer a partir de filtros'
      ]
    },
    {
      icon: Phone,
      title: 'Interacciones Omnicanal',
      color: 'blue',
      details: [
        'Gestión de interacciones en tiempo real vía integración con uContact',
        'Creación de interacciones directamente desde el CRM',
        'Identificación automática del contacto en interacciones entrantes',
        'Asignación automática del contacto a la interacción',
        'Historial completo de interacciones por contacto (timeline)'
      ]
    },
    {
      icon: Database,
      title: 'Gestión de Empresas',
      color: 'blue',
      details: [
        'Perfil completo con campos personalizados',
        'Vista consolidada: datos, contactos asociados, notas y calendario',
        'Gestión de zona horaria',
        'Asociación de contactos a empresas',
        'Gestión individual y masiva',
        'Reasignación masiva de contactos o empresas',
        'Importación desde CSV/Excel'
      ]
    },
    {
      icon: Boxes,
      title: 'Entidades Personalizadas',
      color: 'blue',
      details: [
        'Creación de entidades de negocio personalizadas (ej: cuentas, tickets, oportunidades)',
        'Estructura completamente configurable mediante Form Builder',
        'Vinculación con contactos y empresas',
        'Permite adaptar el CRM a distintos modelos de negocio sin desarrollo adicional'
      ]
    },
    {
      icon: FileText,
      title: 'Form Builder (Motor Central)',
      color: 'blue',
      details: [
        'Formularios independientes para contactos, empresas y entidades personalizadas',
        'Interfaz configurable (drag & drop)',
        'Más de 16 tipos de campo',
        'Lógica condicional (campos dinámicos)',
        'Validaciones personalizadas',
        'Diferencial fuerte del producto'
      ]
    },
    {
      icon: Webhook,
      title: 'Automatización e Integraciones',
      color: 'blue',
      details: [
        'Motor de Webhooks con arquitectura basada en eventos',
        'Eventos: contacto creado/actualizado/eliminado',
        'Configuración de endpoints',
        'Seguridad mediante tokens',
        'Testing integrado',
        'Capa de integración en tiempo real con sistemas externos'
      ]
    },
    {
      icon: Shield,
      title: 'Seguridad y Accesos',
      color: 'blue',
      details: [
        'Control de Acceso por Roles (RBAC)',
        'Creación y gestión de perfiles',
        'Permisos granulares por módulo: contactos, empresas, herramientas, configuración',
        'Asignación de perfiles',
        'Visualización centralizada de usuarios'
      ]
    },
    {
      icon: Activity,
      title: 'Auditoría y Trazabilidad',
      color: 'blue',
      details: [
        'Registro completo de acciones del sistema',
        'Información: fecha/hora, usuario, acción, recurso afectado',
        'Filtrado por rango y tipo',
        'Registro de estados HTTP',
        'Trazabilidad total de operaciones'
      ]
    },
    {
      icon: FileText,
      title: 'Herramientas de Productividad',
      color: 'blue',
      details: [
        'Scripts/Speeches: plantillas de texto con editor rich-text',
        'Filtros reutilizables: constructor visual, guardado para contactos/interacciones/reportes',
        'Centro de Conflictos: vista centralizada de duplicados con comparación lado a lado',
        'Resolución de conflictos masiva o individual'
      ]
    },
    {
      icon: Database,
      title: 'Identificación y Matching',
      color: 'blue',
      details: [
        'Configuración de identificadores únicos: email, teléfono, ID de mensajería',
        'Claves personalizadas',
        'Reglas de deduplicación automáticas'
      ]
    },
    {
      icon: Calendar,
      title: 'Calendario CRM',
      color: 'blue',
      details: [
        'Eventos asociados a contactos y empresas',
        'Funcionalidad orientada a recordatorios',
        'Notas: Las notificaciones y automatizaciones asociadas están previstas pero aún no implementadas'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
          <span className="text-blue-700 dark:text-blue-300 font-semibold">Plataforma Moderna y Extensible</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          uc-uCRM (UCX)
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
          CRM de nivel enterprise diseñado para centros de comunicación multicanal, integrado con uContact, que permite la gestión unificada de contactos, seguimiento de interacciones, automatización y extensibilidad mediante una arquitectura modular.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            Gestión individual y masiva de datos
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            Vista 360° de contactos y empresas
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            Integración nativa multicanal
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            Modelo de datos extensible
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureDetailCard key={index} {...feature} />
        ))}
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
          Diferencial Clave
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          UCX permite <strong>adaptar el CRM a distintos modelos de negocio sin necesidad de desarrollo adicional</strong>, gracias a su Form Builder y sistema de entidades personalizadas. Es una plataforma preparada para ecosistemas integrados con arquitectura basada en eventos.
        </p>
      </div>
    </div>
  );
}

function V6Section() {
  const features: Array<{
    icon: React.ElementType;
    title: string;
    color: 'blue' | 'green';
    details: string[];
  }> = [
    {
      icon: Users,
      title: 'Gestión de Clientes',
      color: 'green',
      details: [
        'Visualización y edición completa: documento/ID, nombre, dirección (país, estado, ciudad)',
        'Fecha de nacimiento, género, observaciones',
        'Múltiples teléfonos: Teléfono 1/2, Móvil 1/2, Teléfono alternativo',
        'Hasta 6 campos personalizados configurables',
        'Búsqueda por documento, nombre, teléfono',
        'Filtro por asignación: asignados al agente o todos los registros',
        'Selección de cliente desde tabla de resultados'
      ]
    },
    {
      icon: Phone,
      title: 'Gestión de Interacciones',
      color: 'green',
      details: [
        'Inicio de llamadas salientes mediante integración con dialer',
        'Autocompletado del número al seleccionar cliente',
        'Soporte para campañas outbound (preview dialer)',
        'Validación de campaña al momento de marcar',
        'Sistema jerárquico de resultados en 3 niveles (Nivel 1 → Nivel 2 → Nivel 3)',
        'Registro de comentarios por gestión (hasta 800 caracteres)',
        'Registro de teléfonos alternativos si el principal falla',
        'Guardado conjunto de datos del cliente y resultado de la gestión'
      ]
    },
    {
      icon: Calendar,
      title: 'Agenda y Seguimiento',
      color: 'green',
      details: [
        'Vista calendario de gestiones programadas',
        'Alta, edición y eliminación de eventos',
        'Asignación de eventos al agente actual o a otros agentes',
        'Visualización de clientes agendados por fecha',
        'Notificaciones de eventos próximos',
        'Activación/desactivación del scheduler a nivel sistema',
        'Vista supervisor: gestión de agenda a nivel equipo'
      ]
    },
    {
      icon: FileText,
      title: 'Scripts de Atención',
      color: 'green',
      details: [
        'Visualización de scripts asociados a campañas',
        'Disponibles durante la interacción (modal)',
        'Validación si no existe script configurado',
        'Edición de scripts por campaña (supervisor)',
        'Selección de campaña para gestión',
        'Guardado de contenido'
      ]
    },
    {
      icon: Target,
      title: 'Gestión de Supervisión',
      color: 'green',
      details: [
        'Visualización de agentes y carga de casos',
        'Búsqueda de casos: no asignados, parcialmente asignados',
        'Asignación de casos a uno o múltiples agentes',
        'Distribución automática de casos',
        'Desasignación de casos',
        'Configuración de máximo de registros por agente',
        'Filtros por tipo de registro y campaña',
        'Monitoreo de carga de trabajo'
      ]
    },
    {
      icon: Database,
      title: 'Gestión de Bases de Datos',
      color: 'green',
      details: [
        'Creación de bases de datos de clientes',
        'Carga de datos vía CSV (formato validado)',
        'Validaciones: formato de columnas, tipos de datos (teléfonos, flags)',
        'Reporte de errores por línea y columna',
        'Selección de campos para deduplicación',
        'Activación/desactivación de bases',
        'Eliminación de bases (manteniendo historial)',
        'Exportación de bases',
        'Asociación con dialer y generación de listas para campañas',
        'Flag de finalización de contacto'
      ]
    },
    {
      icon: FileText,
      title: 'Configuración de Disposiciones',
      color: 'green',
      details: [
        'Definición de jerarquía de 3 niveles',
        'Configuración de acciones por disposición',
        'Definición de: requiere agenda (sí/no), métricas asociadas, finalización de contacto',
        'Validaciones de estructura',
        'Búsqueda y filtrado',
        'Carga masiva de disposiciones vía CSV',
        'Configuración jerárquica de resultados'
      ]
    },
    {
      icon: Target,
      title: 'Gestión de Campañas',
      color: 'green',
      details: [
        'Visualización de campañas activas',
        'Asociación de campañas a perfiles',
        'Filtrado de agentes y bases por campaña',
        'Creación y edición de perfiles',
        'Definición de hasta 6 campos personalizados',
        'Validaciones obligatorias: nombre, campos, campañas'
      ]
    },
    {
      icon: BarChart3,
      title: 'Reportes y Analítica',
      color: 'green',
      details: [
        'Gráficos de barras y torta sobre gestiones',
        'Visualización por niveles de disposición',
        'Filtros por campaña y rango de fechas',
        'Reportes JasperReports: cantidad de gestiones por fecha/campaña/agente',
        'Tipificaciones por fecha/campaña/agente',
        'Detalle de gestiones',
        'Reportes por base',
        'Exportación de clientes',
        'Resúmenes por agente y campaña'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
          <Target className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
          <span className="text-green-700 dark:text-green-300 font-semibold">CRM Operativo para Campañas</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          uc-CRM-Omni (v6)
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
          CRM omnicanal orientado a centros de contacto, diseñado para gestionar interacciones con clientes, campañas y flujos de trabajo de agentes. Permite operar múltiples canales de comunicación y administrar bases de datos de clientes junto con procesos de asignación y seguimiento.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Gestión de interacciones multicanal
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Operación centrada en agentes y campañas
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Administración de bases de datos
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Reportes operativos y analíticos
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureDetailCard key={index} {...feature} />
        ))}
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-green-50/80 to-emerald-50/80 dark:from-green-900/30 dark:to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50 shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl -z-10" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Zap className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
          Fortaleza Principal
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          v6 es una <strong>solución muy sólida para operación de campañas tradicionales</strong>, con gestión avanzada de asignación de casos, distribución automática, y reportes robustos mediante JasperReports. Ideal para contact centers con procesos establecidos.
        </p>
      </div>
    </div>
  );
}

function ComparisonSection() {
  const comparisons: Array<{
    category: string;
    items: Array<{
      capability: string;
      ucx: { status: 'success' | 'warning' | 'error'; text: string };
      v6: { status: 'success' | 'warning' | 'error'; text: string };
    }>;
    note?: string;
  }> = [
    {
      category: 'Modelo de Datos',
      items: [
        { capability: 'Estructura de datos', ucx: { status: 'success', text: 'Dinámica (Form Builder)' }, v6: { status: 'warning', text: 'Fija' } },
        { capability: 'Campos personalizados', ucx: { status: 'success', text: 'Ilimitados y configurables' }, v6: { status: 'warning', text: 'Limitados (6 campos)' } },
        { capability: 'Entidades personalizadas', ucx: { status: 'success', text: 'Sí (módulos dinámicos)' }, v6: { status: 'error', text: 'No' } },
        { capability: 'Adaptación a negocio', ucx: { status: 'success', text: 'Alta' }, v6: { status: 'warning', text: 'Limitada' } },
      ],
      note: 'UCX permite modelar el CRM según el negocio, mientras que v6 trabaja con una estructura predefinida.'
    },
    {
      category: 'Gestión de Contactos / Clientes',
      items: [
        { capability: 'Vista 360°', ucx: { status: 'success', text: 'Completa (timeline, notas, interacciones)' }, v6: { status: 'warning', text: 'Parcial' } },
        { capability: 'Edición individual', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'success', text: 'Sí' } },
        { capability: 'Operaciones masivas', ucx: { status: 'success', text: 'Sí (bulk update, delete, filtros)' }, v6: { status: 'error', text: 'No' } },
        { capability: 'Deduplicación', ucx: { status: 'success', text: 'Automática + resolución de conflictos' }, v6: { status: 'warning', text: 'Básica (por carga)' } },
        { capability: 'Import / Export', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'success', text: 'Sí' } },
      ],
      note: 'UCX introduce gestión avanzada de datos y calidad, mientras que v6 es más operativo.'
    },
    {
      category: 'Interacciones (Omnicanal)',
      items: [
        { capability: 'Multicanal', ucx: { status: 'success', text: 'Integrado con uContact' }, v6: { status: 'success', text: 'Sí' } },
        { capability: 'Creación desde CRM', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'warning', text: 'Limitado (enfocado en llamadas)' } },
        { capability: 'Identificación automática', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'warning', text: 'Parcial' } },
        { capability: 'Historial de interacciones', ucx: { status: 'success', text: 'Timeline completo' }, v6: { status: 'warning', text: 'Asociado a gestión' } },
      ],
      note: 'UCX trabaja con concepto de interacción unificada, v6 está más orientado a llamadas y gestión.'
    },
    {
      category: 'Gestión Operativa (Campañas y Asignación)',
      items: [
        { capability: 'Gestión de campañas', ucx: { status: 'warning', text: 'Indirecta (vía integración)' }, v6: { status: 'success', text: 'Nativa' } },
        { capability: 'Asignación de casos', ucx: { status: 'warning', text: 'No centralizado como módulo' }, v6: { status: 'success', text: 'Avanzado' } },
        { capability: 'Distribución automática', ucx: { status: 'error', text: 'No' }, v6: { status: 'success', text: 'Sí' } },
        { capability: 'Gestión de bases', ucx: { status: 'warning', text: 'Más flexible (no centralizado)' }, v6: { status: 'success', text: 'Fuerte' } },
      ],
      note: 'v6 es más fuerte en operación clásica de campañas.'
    },
    {
      category: 'Automatización e Integraciones',
      items: [
        { capability: 'Webhooks', ucx: { status: 'success', text: 'Sí (event-driven)' }, v6: { status: 'error', text: 'No' } },
        { capability: 'Integración con sistemas externos', ucx: { status: 'success', text: 'Flexible' }, v6: { status: 'warning', text: 'Limitada' } },
        { capability: 'Arquitectura basada en eventos', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'error', text: 'No' } },
      ],
      note: 'UCX está preparado para ecosistemas integrados.'
    },
    {
      category: 'Extensibilidad',
      items: [
        { capability: 'Personalización sin código', ucx: { status: 'success', text: 'Alta' }, v6: { status: 'error', text: 'No' } },
        { capability: 'Nuevos módulos', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'error', text: 'No' } },
        { capability: 'Escalabilidad funcional', ucx: { status: 'success', text: 'Alta' }, v6: { status: 'warning', text: 'Limitada' } },
      ],
      note: 'Este es uno de los mayores diferenciales.'
    },
    {
      category: 'Scripts, Agenda y Herramientas',
      items: [
        { capability: 'Scripts', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'success', text: 'Sí' } },
        { capability: 'Agenda', ucx: { status: 'warning', text: 'Básica (sin automatizaciones aún)' }, v6: { status: 'success', text: 'Avanzada' } },
        { capability: 'Notificaciones', ucx: { status: 'warning', text: 'En evolución' }, v6: { status: 'success', text: 'Sí' } },
        { capability: 'Filtros avanzados', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'warning', text: 'Básicos' } },
      ],
      note: 'v6 tiene más madurez en agenda operativa hoy.'
    },
    {
      category: 'Reportes y Analítica',
      items: [
        { capability: 'Reportes', ucx: { status: 'warning', text: 'En evolución' }, v6: { status: 'success', text: 'JasperReports' } },
        { capability: 'Exportaciones', ucx: { status: 'success', text: 'Sí' }, v6: { status: 'success', text: 'Sí' } },
        { capability: 'Analytics', ucx: { status: 'warning', text: 'Básico' }, v6: { status: 'success', text: 'Avanzado' } },
      ],
      note: 'v6 hoy es más fuerte en reporting.'
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Comparativa Detallada
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Análisis lado a lado de las capacidades de ambos sistemas
        </p>
      </div>

      <div className="space-y-8">
        {comparisons.map((section, idx) => (
          <div key={idx} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">{section.category}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Capacidad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      UCX
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      v6
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {section.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {item.capability}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.ucx.status} text={item.ucx.text} />
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.v6.status} text={item.v6.text} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.note && (
              <div className="px-6 py-4 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm border-t border-blue-100/50 dark:border-blue-800/50">
                <p className="text-sm text-blue-900 dark:text-blue-100 flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400 font-bold">👉</span>
                  <span>{section.note}</span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
          <div className="flex items-center mb-4">
            <Sparkles className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">UCX</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Fuerte en:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Modelo de datos dinámico</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Vista 360° del cliente</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Extensibilidad</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Integraciones (webhooks, eventos)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Limitaciones actuales:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Reporting menos maduro</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Agenda en evolución</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Menor foco en operación clásica de campañas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-800">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-amber-600 dark:text-amber-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">v6</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Fuerte en:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Operación de campañas</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Asignación de casos</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Gestión de bases</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Reportes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Limitaciones:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Estructura rígida</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Baja extensibilidad</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Dependencia de procesos manuales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-brand-600 to-corporate-700 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Conclusión Estratégica</h3>
        <p className="text-lg text-blue-100 leading-relaxed">
          <strong className="text-white">v6</strong> es una solución muy sólida para operación de campañas tradicionales. 
          <strong className="text-white"> UCX</strong>, en cambio, no busca replicar ese modelo, sino evolucionarlo hacia una 
          <strong className="text-white"> plataforma CRM flexible</strong>, donde el cliente puede adaptar el sistema a su negocio 
          e integrarlo con otros sistemas de forma mucho más natural.
        </p>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'green' | 'amber';
}

function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const colorClasses = {
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      icon: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800'
    },
    amber: {
      bg: 'bg-amber-100 dark:bg-amber-900/30',
      icon: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border ${colors.border} hover:shadow-lg transition-shadow`}>
      <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${colors.icon}`} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
}

interface FeatureDetailCardProps {
  icon: React.ElementType;
  title: string;
  details: string[];
  color: 'blue' | 'green';
}

function FeatureDetailCard({ icon: Icon, title, details, color }: FeatureDetailCardProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      icon: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      bullet: 'text-blue-500'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      icon: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
      bullet: 'text-green-500'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-md border ${colors.border} hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className={`relative ${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm`}>
        <Icon className={`w-6 h-6 ${colors.icon}`} />
      </div>
      <h3 className="relative text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <ul className="relative space-y-2">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <CheckCircle2 className={`w-4 h-4 ${colors.bullet} mr-2 mt-0.5 flex-shrink-0`} />
            <span className="text-gray-600 dark:text-gray-300">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface StatusBadgeProps {
  status: 'success' | 'warning' | 'error';
  text: string;
}

function StatusBadge({ status, text }: StatusBadgeProps) {
  const statusConfig = {
    success: {
      icon: CheckCircle2,
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-800 dark:text-green-200',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      textColor: 'text-amber-800 dark:text-amber-200',
      iconColor: 'text-amber-600 dark:text-amber-400'
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-800 dark:text-red-200',
      iconColor: 'text-red-600 dark:text-red-400'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`inline-flex items-start ${config.bgColor} ${config.textColor} px-3 py-2 rounded-lg text-sm font-medium`}>
      <Icon className={`w-4 h-4 ${config.iconColor} mr-2 mt-0.5 flex-shrink-0`} />
      <span>{text}</span>
    </div>
  );
}
