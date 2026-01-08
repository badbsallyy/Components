import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ component: string }> }
) {
  try {
    const { component } = await params
    const registryPath = path.join(process.cwd(), 'public', 'registry', `${component}.json`)
    
    if (!fs.existsSync(registryPath)) {
      return NextResponse.json({ error: 'Component not found' }, { status: 404 })
    }
    
    const data = fs.readFileSync(registryPath, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch {
    return NextResponse.json({ error: 'Failed to load component' }, { status: 500 })
  }
}
