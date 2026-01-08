import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const registryPath = path.join(process.cwd(), 'public', 'registry', 'index.json')
    const data = fs.readFileSync(registryPath, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ error: 'Registry not found' }, { status: 404 })
  }
}
