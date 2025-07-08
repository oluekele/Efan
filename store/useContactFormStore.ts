import { create } from 'zustand'

type ContactFormState = {
  name: string
  email: string
  subject: string
  message: string
  setField: (field: string, value: string) => void
}

export const useContactFormStore = create<ContactFormState>((set) => ({
  name: "",
  email: "",
  subject: "",
  message: "",
  setField: (field, value) => set({ [field]: value }),
}))
