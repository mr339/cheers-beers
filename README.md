Please follow the following steps to clone and setup all prerequisites:

- ## Prerequisites

1. **Nodejs**

Make sure to have the [Node.js](https://nodejs.org/en/) installed & running on your machine. If you already have installed Node on your computer, you can skip this step if your existing node version is greater than equal to 16.

2. **Yarn**

Followed by yarn which is necessary to install, update or delete the needed node packages for the specific projects.

3. **React/Nextjs**

As this codebase uses the Next Js framework, proper understanding and prior knowledge of _ **React** _ basics and fundamentals are required and also NextJs' routing and server components. For better understanding of React and NextJs we suggest you to once go through official documentation of React from [ReactJS.org](https://reactjs.org/docs/getting-started.html) along with NextJs from [NextJS.org](https://nextjs.org/).

4. **Redux Toolkit**

As for the global state management tool we have chosen the newly introduced redux toolkit which hugely decreases the boilerplate necessary to implement redux into a project. So prior knowledge of redux and its flow structure is necessary.

5. **Axios**

As for data fetching from backend we chose axios which is a package that helps you make HTTPRequests with ease. It also helps to intercept request and response and transform request and response data.For better understanding of how axios works you can go through the documentation of axios [axios-http.com/](https://axios-http.com/)


# Getting Started

## Step 1: Clone the Base code repository
Clone Repository
```js
 git clone git@github.com:mr339/cheers-beers.git
```
IF using zipped file
```js
 Unzip the zipped file
```

## Step 2: Checkout to branch(if git cloned else go skip this step)
Fetch the latest branch
```js
 git fetch origin beer-branch
```
Checkout to latest branch
```js
 git checkout beer-branch
```
## Step 3: Setup .env file
Create a new file in root path named .env.local with the following values:
```js
apiURL= 'your base api url' //https://api.punkapi.com/v2/beers
```

## Step 4: Install packages
Run the following command
```js
 yarn install
```
## Step 5: Run app for development
```js
 yarn run dev
```
Runs the app in the development Open http://127.0.0.1:3000 and IF port 3000 is unavailable, please check your terminal to see in which port the app is running and redirect likewise.


## Naming Convention

### For declaring variables we will be using camelCase variable names throughout the project like

```js
const handleLoginSubmit = () => {};
```

### And for creating a folder we use dash in between the words with all small letters like: <br/>user-profile

# utils

Any utilities should be made under shared/utils. If name of util is xyz:
- The folder is named xyz-utils and file inside that folder should is named xyz.util.ts
 (**Note**: The folder name has a dash and file name has dot in the name with the folder name being plural(utils) and file name being singular(util))
 
# Security headers
 
All the security header options are set in 'next.config.js' file. The one's being used currently are: 

### X-Frame-Options
   This header indicates whether the site should be allowed to be displayed within an iframe. This can prevent against clickjacking      
   attacks.

### X-Content-Type-Options
   This header prevents the browser from attempting to guess the type of content if the Content-Type header is not explicitly set. This 
   can prevent XSS exploits for websites that allow users to upload and share files.The only valid value for this header is nosniff.

### Referrer-Policy
   This header controls how much information the browser includes when navigating from the current website (origin) to another. You can 
   read about the different options [here](https://scotthelme.co.uk/a-new-security-header-referrer-policy/). The options currently being 
   used is 'strict-origin'.

### Permissions-Policy
   This header allows you to control which features and APIs can be used in the browser.For example, if your CMS web app does not need to 
   access the camera or microphone of the device, you can set the camera and microphone permissions to none. If your CMS web app requires 
   access to certain sensors or media content, you can set the corresponding permissions to self.

### Content-Security-Policy
   This header helps prevent cross-site scripting (XSS), clickjacking and other code injection attacks. Content Security Policy (CSP) can 
   specify allowed origins for content including scripts, stylesheets, images, fonts, objects, media (audio, video), iframes, and more.

You can read about the many different CSP options [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

# Code commenting

Here are some simple rules that must be followed while writing comments on your codebase.For more detailed information, these links
can be followed:

- [JSDoc](https://www.section.io/engineering-education/jsdoc-documentation/)
- [Coding standards](https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/#formatting-guidelines)

  Inline comments inside methods and functions should be formatted as follows:

  ## Single line comments

  They should begin with doule forward slashes

  ```js
  // Extract the array values.
  ```

  ## Multi-line comments

  ```js
  /*
   * This is a comment that is long enough to warrant being stretched over
   * the span of multiple lines. You'll notice this follows basically
   * the same format as the JSDoc wrapping and comment block style.
   */
  ```

  Important note: Multi-line comments must not begin with /\*_ (double asterisk). Use /_ (single asterisk) instead.

  ## Documentation comment

  These types of comments are signified by using double asterisk after single forward slash i.e /\*\* .The double asterisk is used to
  indicate that the comment contains special information, such as the types of parameters and return values of a function.

  ```js
  /**
   * This is a documentation comment
   *
   * This function takes in two parameters, a number and a callback function
   * The function will square the number, and then pass the result to the callback
   *
   * @param {number} num - The number to be squared
   * @param {function} callback - The function to be called with the squared result
   * @returns {number} - The result of the square operation
   */
  function squareAndCall(num, callback) {
    const squaredNum = num * num;
    callback(squaredNum);
    return squaredNum;
  }
  ```

  ## Aligning comments

  Related comments should be spaced so that they align to make them more easily readable.

  ```js
  /**
   * @param {very_long_type} name           Description.
   * @param {type}           very_long_name Description.
   */
  ```

## Learn More

To learn more about Next.js, take a look at the following resources:
