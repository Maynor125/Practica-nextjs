import localFonts from 'next/font/local'

export const firacode = localFonts({
    src:[{
      path:'../fonts/FiraCode-Medium.woff2',
      weight:'400',
      style:'normal',
    },
    {
      path:'../fonts/FiraCode-Bold.woff2',
      weight:'700',
      style:'italic',
    }
  ]
  })