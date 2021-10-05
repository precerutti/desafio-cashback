import { extendTheme } from "@chakra-ui/react";
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'

export const theme = extendTheme({
    colors: {
        green: {      
            "50": "#F0FFF4,",
            "100": "#C6F6D5",
            "200": "#9AE6B4",
            "300": "#68D391",
            "400": "#48BB78",
            "500": "#38A169",
            "600": "#2F855A",
            "700": "#276749",
            "800": "#22543D",
            "900": "#1C4532",
        },
        gray: {
            "50": "#F7FAFC",
            "100": "#EDF2F7",
            "200": "#E2E8F0",
        }
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'bg.50'
            }
        }
    }
})