

// color-mode.jsx top imports — remove ThemeProvider from next-themes
'use client'

import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react'
import { useTheme } from 'next-themes'   // ← useTheme stays, ThemeProvider goes
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'
export function ColorModeProvider({ children }) {
  return <>{children}</>
}