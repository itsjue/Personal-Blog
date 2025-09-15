"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function StatusDropdownMenuCheckboxes() {
const [showPublished, setShowPublished] = React.useState(false)
const [showDraft, setShowDraft] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showPublished}
          onCheckedChange={setShowPublished}
        >
          Published
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showDraft}
          onCheckedChange={setShowDraft}
        >
          Draft
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function CategoriesDropdownMenuCheckboxes() {
const [showCat, setShowCat] = React.useState(false)
const [showGeneral, setShowGeneral] = React.useState(false)
const [showInspiration, setShowInspiration] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showCat}
          onCheckedChange={setShowCat}
        >
          Cat
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showGeneral}
          onCheckedChange={setShowGeneral}
        >
          General
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showInspiration}
          onCheckedChange={setShowInspiration}
        >
          Inspiration
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
