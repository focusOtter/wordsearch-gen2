# Gen2 Wordsearch

<img width="1658" alt="image" src="https://github.com/focusOtter/wordsearch-gen2/assets/5106417/3310d9c9-c5f2-4cf7-8c6b-d7a814bd7676">

Welcome to Gen2 Wordsearch, a next-generation web app designed to help you create and manage word searches. With the integration of AI, users can not only craft their own puzzles but also generate thematically consistent words to fill their grids. Live link here at [Gen2 Wordsearch](https://main.dhoow7ckft8it.amplifyapp.com/).

## Features

- **Custom Wordsearch Creation**: Create word searches tailored to your preference.
- **AI-Powered Word Suggestions**: Input a theme and let our AI suggest words that fit, making your word searches more engaging and relevant.
- **Intuitive Management**: Easily manage your created word searches, edit, or delete them as needed.
- **Responsive Design**: Enjoy a seamless experience across all your devices, thanks to a responsive layout powered by Tailwind CSS and DaisyUI.
- **Cloud-Connected Backend**: Leveraging AWS Amplify Gen2, your data and authentication needs are met with industry-leading technology.

## Technology Stack

- **Frontend**: NextJS with the latest app router for an optimized mix of client-side and server-side rendering.
- **Styling**: Tailwind CSS with DaisyUI for design and aestetics.
- **Backend**: AWS Amplify Gen2 for a cloud-connected backend, including data management with AWS AppSync and authentication via Amazon Cognito.
- **AI Integration**: Custom AI word suggestions powered by Amazon Bedrock, seamlessly integrated via a custom data mutation.

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [AWS Amplify Gen2](https://aws.amazon.com/amplify/)
- [Amazon Bedrock](https://aws.amazon.com/bedrock/)
- [DynamoDB](https://aws.amazon.com/dynamodb/)
- [AWS AppSync](https://aws.amazon.com/appsync/)

## Getting Started

To get started with Gen2 Wordsearch, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version)
- npm or yarn

### Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/focusOtter/wordsearch-gen2.git
   ```
2. Navigate into the project directory:
   ```
   cd wordsearch-gen2
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Deploy the AWS resources (see [here](https://docs.amplify.aws/gen2/start/account-setup/) if this is your first time using AWS)
   ```
   npx ampx sandbox
   ```

### Running Locally

To run the application locally:

```
npm run dev
```

Then, open your browser and navigate to `http://localhost:3000` to see the app in action.

## Contributing

We welcome contributions! If you encounter an issue or have a feature suggestion, feel free to file an issue. Additionally, if you'd like to contribute a fix or a feature, please submit a Pull Request (PR) with a clear description of the changes.

## License

Gen2 Wordsearch is open-source software licensed under the MIT License.
