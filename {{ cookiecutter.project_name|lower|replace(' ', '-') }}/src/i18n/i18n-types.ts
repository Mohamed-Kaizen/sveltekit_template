// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'ar'
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * H​e​l​l​o
	 */
	HI: string
	/**
	 * {​0​}
	 * @param {unknown} 0
	 */
	LINK: RequiredParams<'0'>
}

export type TranslationFunctions = {
	/**
	 * Hello
	 */
	HI: () => LocalizedString
	/**
	 * {0}
	 */
	LINK: (arg0: unknown) => LocalizedString
}

export type Formatters = {}