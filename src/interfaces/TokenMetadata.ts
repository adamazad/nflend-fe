export interface TokenMetadata {
  title: string
  type: 'object' | string
  properties: {
    name: {
      type: string
      description: string
    }
    description: {
      type: string
      description: string
    }
    image: {
      type: string
      description: string
    }
  }
}
