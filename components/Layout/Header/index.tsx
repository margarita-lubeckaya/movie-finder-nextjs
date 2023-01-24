import * as React from 'react'
import { ChangeEventHandler } from 'react'

// import { useTranslation } from 'react-i18next'
// import { supportedLanguages } from '@src/i18n'
import * as S from './styled'

const Header = ({
  onThemeChange,
  selectedTheme,
}: {
  onThemeChange: (theme: string) => void
  selectedTheme: string
}) => {
  // const { t, i18n } = useTranslation(['common'])

  const onThemeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onThemeChange(event.target.value)
  }
  // const onLangSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
  //   i18n.changeLanguage(event.target.value)
  // }

  return (
    <S.Header>
      <S.HeaderCentered>
        <S.LogoLink href="/">movie finder</S.LogoLink>
        <S.Nav>
          <S.NavMenuList>
            <S.NavMenuItem>
              <S.MainNavLink href="/movies">t('nav.movies')</S.MainNavLink>
            </S.NavMenuItem>
            <S.NavMenuItem>
              <S.MainNavLink href="/about">t('nav.about')</S.MainNavLink>
            </S.NavMenuItem>
          </S.NavMenuList>
          <S.ExtraList>
            <S.ExtraItem>
              {/* <select */}
              {/*  onChange={onLangSelect} */}
              {/*  defaultValue={i18n.resolvedLanguage} */}
              {/* > */}
              {/*  {Object.keys(supportedLanguages).map((lng) => ( */}
              {/*    <option key={lng} value={lng}> */}
              {/*      {supportedLanguages[lng as keyof typeof supportedLanguages]} */}
              {/*    </option> */}
              {/*  ))} */}
              {/* </select> */}
            </S.ExtraItem>
            <S.ExtraItem>
              <select
                onChange={onThemeSelect}
                value={selectedTheme || 'default'}
              >
                {/* <option value="default">{t('theme.default')}</option> */}
                {/* <option value="light">{t('theme.light')}</option> */}
                {/* <option value="extra">{t('theme.extra')}</option> */}
                <option value="default">theme.default</option>
                <option value="light">theme.light</option>
                <option value="extra">theme.extra</option>
              </select>
            </S.ExtraItem>
          </S.ExtraList>
        </S.Nav>
      </S.HeaderCentered>
    </S.Header>
  )
}

export default Header
