import { collectDefaultMetrics, Registry } from 'prom-client';
import { NextResponse } from 'next/server';

const register = new Registry();
collectDefaultMetrics({ register });

// Ajoute des métriques personnalisées ici si nécessaire
const httpRequestsTotal = new register.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'path', 'status']
});

export async function GET() {
  try {
    const metrics = await register.metrics();
    return new NextResponse(metrics, {
      headers: {
        'Content-Type': register.contentType
      }
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 