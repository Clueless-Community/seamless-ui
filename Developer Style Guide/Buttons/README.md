# 📒 Developer style guide for Buttons

<img width="605" alt="Screenshot 2022-10-25 at 8 32 40 PM" src="https://user-images.githubusercontent.com/91758830/197823712-fdfb3883-f709-4b0a-bc6a-fa7021129acc.png">


## Types of button 🔽

1. Primary
2. Secondary
3. Success
4. Error / Red
5. Warning / Yellow
6. Animated ( Coming Soon)

---

## General must known design system guideline :

### Color 🎨

| Color            | Primary     | Secondary   | Success      | Alert         | Error      | Disabled    |
| ---------------- | ----------- | ----------- | ------------ | ------------- | ---------- | ----------- |
| Code in Tailwind | bg-blue-600 | bg-gray-200 | bg-green-600 | bg-yellow-500 | bg-red-500 | bg-gray-400 |

### Font

For all buttons font is : **`font-semibold`**

### Hover Color

For all primary and secondary button the hover color is **`hover:bg-blue-700`**.

### Transition ( `transition-all` )

whenever there is a hover effect, one must use `transition-all` class with it.

### Border Radius 🔲

The normal border-radius for the components are `rounded-2xl`. However this does not apply in many cases like buttons, input boxes and all.

---

## Primary Button ✅

Every type of button has two variants `Normal` and `Rounded`. 

`Color` : The primary button main color is **`bg-blue-500`**

`Text color` : The text color for primary button is **`text-white`**

### Primary Normal button guidelines :

|  | Padding | Border Radius | Text Size |
| --- | --- | --- | --- |
| Small | px-4 & py-2 | rounded-md | text-lg |
| Medium | px-6 & py-3 | rounded-md | text-lg |
| Large | px-8 & py-4 | rounded-lg | text-xl |

### Primary Rounded button guidelines :

|  | Padding | Border Radius | Text Size |
| --- | --- | --- | --- |
| Small | px-4 & py-2 | rounded-full | text-lg |
| Medium | px-6 & py-3 | rounded-full | text-lg |
| Large | px-8 & py-4 | rounded-full | text-xl |

`Exceptions` : The square button and only icon/ SVG button has a padding x and y same and, it equals the padding Y ( `py` ) of the normal buttons of the same size.

---

## Secondary Button ✅

Every type of button has two variants `Normal` and `Rounded`. 

`Border` : The border for all secondary button is **`border-2`**

`Border color` : The primary button main color is **`bg-blue-600`**

`Text color` : The text color for primary button is **`text-blue-600`**

`Hover text color` : The text color for primary button is **`hover:text-white`**

### Secondary Normal button guidelines :

|  | Padding | Border Radius | Text Size |
| --- | --- | --- | --- |
| Small | px-4 & py-2 | rounded-md | text-lg |
| Medium | px-6 & py-3 | rounded-md | text-lg |
| Large | px-8 & py-4 | rounded-lg | text-xl |

### Secondary Rounded button guidelines :

|  | Padding | Border Radius | Text Size |
| --- | --- | --- | --- |
| Small | px-4 & py-2 | rounded-full | text-lg |
| Medium | px-6 & py-3 | rounded-full | text-lg |
| Large | px-8 & py-4 | rounded-full | text-xl |

`Exceptions` : The square button and only icon/ SVG button has a padding x and y same and, it equals the padding Y ( `py` ) of the normal buttons of the same size.

---

## Success, Error and Warning ➕

This buttons has all the versions of previous . This just follows the general color scheme. 

### Hover Effect :

For the hover effect on the button it is just one shade darker than the original button.

**Example** : For success the normal background color is `bg-green-500` so the hover effect of this will be `bg-green-600`

---

## Example of Primary Button file 👇

This is the way we have all the buttons. 

Like in the `Primary/button.html` file you can find all the buttons of different size like this which maintains the design system above and also have a disabled state.

Want to see this buttons in action? Try copy pasting this code in [Tailwind Playground]([https://play.tailwindcss.com/](https://play.tailwindcss.com/)). 💥

```html
<!-- Small -->

<button class="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold text-lg hover:bg-blue-700 transition-all disabled:bg-gray-400">Button</button>

<!-- Medium -->

<button class="bg-blue-600 px-6 py-3 rounded-md text-white font-semibold text-lg hover:bg-blue-700 transition-all disabled:bg-gray-400" >Button</button>

<!-- Large -->

<button class="bg-blue-600 px-8 py-4 rounded-md text-white font-semibold text-xl hover:bg-blue-700 transition-all disabled:bg-gray-400">Button</button>
```

---

## Having some problem ? 😕

If you still have a problem understanding this please join our [discord server]([https://discord.gg/zrVMjGW8sB](https://discord.gg/zrVMjGW8sB)) to get help.
