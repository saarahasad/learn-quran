import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'
import { handleTranscribeRequest } from './server/transcribeHandler.mjs'
import { handleArabicTtsRequest } from './server/arabicTtsHandler.mjs'
import { handleIraabDaasRequest } from './server/iraabDaasHandler.mjs'
import { handleIraabExplainRequest } from './server/iraabExplainHandler.mjs'
import { handleIraabGuideRequest } from './server/iraabGuideHandler.mjs'

function transcribeApiPlugin() {
  return {
    name: 'transcribe-api',
    enforce: 'pre',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      const groqKey = env.GROQ_API_KEY || env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY || ''
      const apiKey = env.OPENAI_API_KEY || env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY || ''
      const anthropicKey = env.ANTHROPIC_API_KEY || env.VITE_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY || ''
      if (groqKey) process.env.GROQ_API_KEY = groqKey
      if (apiKey) process.env.OPENAI_API_KEY = apiKey
      if (anthropicKey) process.env.ANTHROPIC_API_KEY = anthropicKey

      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/api/arabic-tts')) {
          handleArabicTtsRequest(req, res).catch((err) => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err?.message || 'TTS failed.' }))
          })
          return
        }
        if (req.url?.startsWith('/api/iraab-daas')) {
          handleIraabDaasRequest(req, res).catch((err) => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err?.message || 'Daas iʿrāb failed.' }))
          })
          return
        }
        if (req.url?.startsWith('/api/iraab-guide')) {
          handleIraabGuideRequest(req, res).catch((err) => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err?.message || 'Iʿrāb guide failed.' }))
          })
          return
        }
        if (req.url?.startsWith('/api/iraab-explain')) {
          handleIraabExplainRequest(req, res).catch((err) => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err?.message || 'Iʿrāb tutor failed.' }))
          })
          return
        }
        if (!req.url?.startsWith('/api/transcribe')) return next()
        handleTranscribeRequest(req, res).catch((err) => {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: err?.message || 'Transcription failed.' }))
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.GROQ_API_KEY = process.env.GROQ_API_KEY || env.GROQ_API_KEY || env.VITE_GROQ_API_KEY
  process.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY || env.OPENAI_API_KEY || env.VITE_OPENAI_API_KEY
  process.env.ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || env.ANTHROPIC_API_KEY || env.VITE_ANTHROPIC_API_KEY

  return {
    base: process.env.GITHUB_PAGES === 'true' ? '/learn-quran/' : '/',
    plugins: [react(), transcribeApiPlugin()],
  }
})
