export type BookType = {
	greeting: string
	official?: Spell
	player?: Spell
}

export type Spell = {
	[spell: string]: SpellData
}

export type SpellData = {
	security: string
	cost?: number
	costType?: string
	author?: string
	date: string
	description: string
}
