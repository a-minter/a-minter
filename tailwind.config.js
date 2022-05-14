module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'archivo': ['Archivo'],
            'etna': ['Etna']
        },
        fontSize: {
            'tiny-1': '.4rem',
            'tiny-2': '.5rem',
            'tiny-3': '.6rem',
            'tiny-3.5': '.64rem',
            'tiny-4': '.68rem',
            'tiny-5': '.71rem',

            'xs': ['0.75rem', {
                'line-height': '1rem'
            }],
            'xs-2': ['0.81rem', {
                'line-height': '1rem'
            }],
            'xs-3': ['0.875', {
                'line-height': '1rem'
            }],
            'sm': ['0.875rem', {
                'line-height': '1.25rem'
            }],
            'md': ['1rem', {
                'line-height': '1.5rem'
            }],
            'lg': ['1.125rem', {
                'line-height': '1.75rem'
            }],
            'xl': ['1.25rem', {
                'line-height': '1.75rem'
            }],
            '2xl': ['1.5rem', {
                'line-height': '2rem'
            }],
            '3xl': ['1.875rem', {
                'line-height': '2.25rem'
            }],
            '4xl': ['2.25rem', {
                'line-height': '2.5rem'
            }],
            '5xl': ['3rem', {
                'line-height': '1'
            }],
            '6xl': ['3.75rem', {
                'line-height': '1'
            }],
            '7xl': ['4.6rem', {
                'line-height': '1'
            }],
            '8xl': ['6rem', {
                'line-height': '1'
            }],
            '9xl': ['8rem', {
                'line-height': '1'
            }]
        },

        boxShadow: {
            "mjol-blue": "0px 0px 8px 1px #93c5fd",
            "mjol-base-blue-drop-xl": "0px 15px 14px 0px rgba(120, 192, 233, 0.3)",
            "mjol-gray": "0px 0px 8px 0px rgba(4, 17, 29, 0.25)",
            "mjol-gray-lg": "0px 0px 8px 1px rgba(4, 17, 29, 0.5)",
            "mjol-gray-xs": "0px 0px 3px 3px rgba(0, 0, 0, 0.1)",
            "mjol-gray-md": "0px 0px 4px 2px rgba(0, 0, 0, 0.2)"
        },

        screens: {
            'xxs': '310px',
            'xs': '500px',
            'sm': '680px',
            'md': '768px',
            'lg': '980px',
            '1200px': '1200px',
            'xl': '1320px',
            '2xl': '1536px',

            'max-xxs': {'max': '310px'},
            'max-xs': {'max': '500px'},
            'max-sm': {'max': '680px'},
            'max-md': {'max': '768px'},
            'max-lg': {'max': '980px'},
            'max-xl': {'max': '1320px'},
            'max-2xl': {'max': '1536px'},
        },

        extend: {
            outline: {
                0: ['0 solid white', '0']
            },
            zIndex: {
                '-10': '-10'
            },

            transitionTimingFunction: {
                'border-timing': 'cubic-bezier(.445,.05,.55,.95)'
            },

            aspectRatio: {
                'square': '1 / 1',
            },

            // Sizes
            width: {
                '84': '21rem',
                '88': '22rem',
                '92': '23rem',
            },

            maxHeight: {
                'md': '28rem',
                'lg': '32rem',
                'xl': '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
            },

            // Grid
            gridTemplateColumns: {
                '1-300px': 'repeat(1, 300px)',
                '2-300px': 'repeat(2, 300px)',
                '3-300px': 'repeat(3, 300px)',
                '4-300px': 'repeat(4, 300px)',
                '5-300px': 'repeat(5, 300px)'
            },

            // Colors
            colors: {
                mjol: {
                    "main" : "rgb(4, 4, 4)",
                    "secondary": 'rgb(100, 100, 110)',
                    "secondary-selected": "rgb(70, 70, 70)",

                    'tab-blue': '#1890ff',
                    background: '#f7f7f7',
                    black: 'rgb(0, 0, 0)',
                    white: '#f4f7fc',
                    hover: '#fbfdff',
                    'hover-blue': 'rgb(243, 251, 254)',
                    gray: {
                        border: 'rgb(229,231,235)'
                    },
                    'blue-light-grad': 'rgb(0, 130, 255)',
                    gradient: {
                        'blue-from': 'rgb(0, 163, 255)',
                        'blue-to': 'rgb(0, 102, 255)'
                    },
                    blue: {
                        'card-property': 'rgb(239, 246, 255)',
                        opensea: 'rgb(59, 129, 219)',
                        'opensea-dark': 'rgb(46,104,177)',
                        shadow: 'rgb(224, 240, 250)',
                        button: 'rgb(0, 152, 201)',
                        light: 'rgb(120, 192, 233)',
                        base: '#4391ff',
                    },

                    'light-blue': '#48B3EF',
                    'dark-blue': '#135D86',

                    green: {
                        light: '#1EFF7F',
                        middle: '#1effab',
                        base: '#2dfd87'
                    },
                    cyan: {
                        base: "#18b3cc"
                    }
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio')
    ],
}