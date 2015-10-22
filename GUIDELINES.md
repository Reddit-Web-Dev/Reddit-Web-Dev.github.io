# Reddit-Web-Dev – Coding style guidelines

#### GENERAL
- Indent your code with **4 spaces**

#### HTML
- Attribute values go inside double quotes `attribute="value"`

#### CSS
- Class and id names `use-hyphens`

- Prefer with single quotes `'` over double quotes `"`

- Always have a single space between the colon and the value: `color: red;`

- Omit the units if a value is `0`

- Colors:
    - `#hex` values are preferred over `rgb()` or `hsl()`
    - UPPERCASE is preferred over lowercase (`#BADA55` over `#bada55`)
    - Long form is preferred for consistency (`#666666` over `#666`)
    - When using rgba (and similar) have a space after each comma `rgba(0, 0, 0, 0.5)`

#### JS
- Use [jshint](http://jshint.com/)

- Variables are in `lowerCamelCase`

- Constant variables are `UPPERCASED_WITH_UNDERSCORES`

- If a variable contains a jQuery object, prefix the name with a dollar sign `$`

- Stick with single quotes `'` for strings unless the string itself contains a lot of single quotes

- Functions are `lowerCamelCase`. If it’s a constructor, use `CamelCase`

- Use `===` and `!==` over `==` and `!=`

- Declaring more than 1 variable:
  ```
  var a = 'a',
    b = 12,
    c = 3.14,
    d = {};
  ```

- If / else statements:
  ```
  if (condition) {
      // Code
  } else if (condition2) {
      // Code
  } else {
      // Code
  }
  ```

- Truty and falsy values

  - **Objects** evaluate to **true**
  - **Undefined** evaluates to **false**
  - **Null** evaluates to **false**
  - **Booleans** evaluate to the **value of the boolean**
  - **Numbers** evaluate to false if **+0, -0, or NaN**, otherwise **true**
  - **Strings** evaluate to **false if an empty string ''**, otherwise **true**


- Multiline strings

  Prefer string concatenation over escaping:

  ```
  // Bad
  var string = 'Lorem ipsum dolor sit amet, \
    consectetur adipisicing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua.';

  // Good
  var string = 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipisicing elit, sed do eiusmod ' +
    'tempor incididunt ut labore et dolore magna aliqua.';
  ```

- Object access

  Prefer dot notation for accessing object properties

  ```
  // Bad
  object['property'];

  // Ok
  object[variable];

  // Good
  object.property
  ```

- Comments:  
  ```
  /**
  * Block comments
  * look like this and start with an uppercase letter
  */
  ```

  ```
  // Inline comments start with a space and an uppercase letter
  ```
