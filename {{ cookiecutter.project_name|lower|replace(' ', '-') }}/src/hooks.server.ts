import { sequence } from "@sveltejs/kit/hooks"

import { langs, theme } from "$hooks"

export const handle = sequence(langs, theme)
