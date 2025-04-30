import { NextResponse } from 'next/server';
import { Registry, Counter, collectDefaultMetrics } from 'prom-client';

// Créer un registre
const register = new Registry();

// Collecter les métriques par défaut
collectDefaultMetrics({ register });

// Ajoute des métriques personnalisées ici si nécessaire
const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'path', 'status'],
  registers: [register]
});

// Fonction pour gérer les requêtes GET
export async function GET() {
  try {
    // Incrémente le compteur pour cette requête
    httpRequestsTotal.inc({
      method: 'GET',
      path: '/api/metrics',
      status: 200
    });

    // Renvoie les métriques au format Prometheus
    return new NextResponse(await register.metrics(), {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la génération des métriques:', error);
    return new NextResponse(`Erreur: ${error}`, { status: 500 });
  }
} 