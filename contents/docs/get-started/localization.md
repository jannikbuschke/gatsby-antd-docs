---
title: Localization
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
    Localization
</h1>

## Static Localization

We use the libraries `i18next` and `react-i18next` to localize content in the UI layer. I.e. buttons, headers, descriptions and such content that does not change can be translated.

Provide all translation keys and translations and initialize i18n with a helper function from glow

```jsx
export type keys =
  | 'meetings'
  | 'topics'
  | 'newTopic'
  | 'myTopics'
  | 'topicDetails'
  | 'topicDetailsMessage'
  | 'title'
  | 'meeting'
  | 'dateTime'
  | 'topicCount'

type Translations = Record<keys, string>

const en: Translations = {
  meeting: 'Meeting',
  meetings: 'Meetings',
}

const de: Translations = {
  meeting: 'Meeting',
  meetings: 'Meetings',
}

type Definitions = Record<'en' | 'de', Translations>

export const sharedTranslations: Definitions = {
  en,
  de,
}

type Translations = Record<keys, string>

const resource = {
  en,
  de,
}

initializeI18n(resource)
```

Translate content

```jsx
const { t } = useTranslation()
return <div>{t('meeting')}</div>
```

To change the current language

```jsx
const { t, i18n } = useTranslation()
<Menu.Item onClick={() => i18n.changeLanguage("de")}>de</Menu.Item>
<Menu.Item onClick={() => i18n.changeLanguage("en")}>en</Menu.Item>
```

## Localization of DB entries

For proper localization of DB entries, it is helpful to use a table for localized strings. This is related to using resources in UI / frontends.

A common class `Culture` _can_ be used to configure all allowed cultures for an application, but is not mandatory:

    public class Culture
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
    }

The class `LocalizationSet` makes it easy to use a localized string in any other class.

    public class LocalizationSet
    {
        public Guid Id { get; set; }
        public virtual List<Localization> Localizations { get; set; }
    }

The class `Localization` itself holds the translated `Value` of any string. It is tied to an `LocalizationSet`, uses a string `CultureCode` for identification.

If wanted, it can be also tied to the `Culture`.

    public class Localization
    {
        public Guid Id { get; set; }
        public string CultureCode { get; set; }
        public string Value { get; set; }

        public virtual LocalizationSet LocalizationSet { get; set; }
        public virtual Culture Culture { get; set; }
    }

This is an example of how a class can use two localized strings (one for a `Text` and one for an `Url`) quite easily. The string `DisplayName` is not intended to be localized in this example, but this could also easily be done.

    public class ContentBlock
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public ContentBlockType Type { get; set; }

        public virtual LocalizationSet Text { get; set; }
        public virtual LocalizationSet Url { get; set; }
    }
