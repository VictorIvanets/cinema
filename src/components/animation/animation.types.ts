import { ReactNode } from "react"

export interface AnimationType {
  animate: (animationType: AnmationName) => void
}

export type PropsType = {
  children: ReactNode
  duration?: string
  className?: string
}

export enum AnmationName {
  slideIn = "slide-in",
  slideOut = "slide-out",
}

export enum AnmationDelItem {
  delitem = "delitem",
  notdelitem = "notdelitem",
}
