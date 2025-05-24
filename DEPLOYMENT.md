# Deploying the Marketing Application to Vercel

This guide provides instructions for deploying the Next.js marketing application to Vercel.

## Prerequisites

Before you begin, ensure you have the following:

1.  **A Vercel Account:** You'll need an account on [Vercel](https://vercel.com) to deploy the application.
2.  **Git Repository:** Your application code should be hosted on a Git provider like GitHub, GitLab, or Bitbucket. Ensure your latest code is pushed to the repository.

## Steps to Deploy

Follow these steps to deploy your Next.js application to Vercel:

1.  **Connect Your Git Repository to Vercel:**
    *   Log in to your Vercel account.
    *   From your Vercel dashboard, click on "Add New..." and select "Project".
    *   Choose "Continue with Git" and select the Git provider where your repository is hosted.
    *   Follow the prompts to authorize Vercel to access your repositories.
    *   Select the repository for the marketing application.

2.  **Vercel Project Creation:**
    *   **Framework Detection:** Vercel will typically auto-detect that your project is a Next.js application.
    *   **Framework Preset:** Ensure "Next.js" is selected as the framework preset.
    *   **Root Directory:** The root directory should be the default, which is the root of your repository, as the `marketing` application is located at the repository root.

3.  **Configure Environment Variables:**
    *   Environment variables are managed in your Vercel project's settings. Navigate to your project in Vercel, then go to "Settings" > "Environment Variables".
    *   **Vercel Postgres:** If your application uses `@vercel/postgres` for database integration, you will need to add the necessary connection variables. These typically include:
        *   `POSTGRES_URL`
        *   `POSTGRES_PRISMA_URL`
        *   `POSTGRES_URL_NON_POOLING`
        *   `POSTGRES_USER`
        *   `POSTGRES_HOST`
        *   `POSTGRES_PASSWORD`
        *   `POSTGRES_DATABASE`
        For detailed instructions on setting up Vercel Postgres and obtaining these variable values, please refer to the [official Vercel documentation](https://vercel.com/docs/storage/vercel-postgres/quickstart).
    *   **Vercel Analytics:** If you are using `@vercel/analytics`, it should work automatically without needing specific environment variables, provided the Vercel account you are deploying to is the same one used for the Vercel Analytics service.

4.  **Building and Deployment:**
    *   **Build Command:** Vercel usually auto-configures the build command for Next.js projects. The typical command is `next build`. You can verify this in the "Build & Development Settings" section of your project settings.
    *   **Output Directory:** The output directory for Next.js applications is `.next`. This is also typically auto-configured by Vercel.
    *   **Deployment Triggers:** Vercel automatically deploys your application when changes are pushed to your connected Git repository's main branch (e.g., `main`, `master`). You can configure deployments for other branches (e.g., preview deployments for pull requests) in your project settings under "Git".

## Post-Deployment

Once your application is successfully deployed:

1.  **Accessing the Deployed Application:**
    *   Vercel will provide you with a unique URL (or multiple, for different environments like production and preview) where your application is accessible. You can find this URL on your project's dashboard in Vercel.

2.  **Viewing Logs and Analytics:**
    *   **Logs:** You can view real-time and historical logs for your deployed application directly from the Vercel dashboard. Navigate to your project and select the "Logs" tab.
    *   **Analytics:** If Vercel Analytics is enabled, you can view performance metrics and user traffic data under the "Analytics" tab of your project in Vercel.

This completes the deployment process. Your marketing application should now be live on Vercel.

---

# Deploying the Janitor Application to Vercel

This guide provides instructions for deploying the Next.js `janitor` application (located in the `janitor/` subdirectory) to Vercel.

## Prerequisites

Before you begin, ensure you have the following:

1.  **A Vercel Account:** You'll need an account on [Vercel](https://vercel.com) to deploy the application.
2.  **Git Repository:** Your application code should be hosted on a Git provider like GitHub, GitLab, or Bitbucket. Ensure your latest code for the `janitor` application is pushed to this repository. This might be the same repository used for the main marketing application.

## Steps to Deploy

Follow these steps to deploy your `janitor` Next.js application to Vercel:

1.  **Create a New Vercel Project:**
    *   Log in to your Vercel account.
    *   From your Vercel dashboard, click on "Add New..." and select "Project".

2.  **Connect Your Git Repository:**
    *   Choose "Continue with Git" and select the Git provider where your repository is hosted.
    *   If you have previously connected this repository for another project (e.g., the marketing app), you can select it from the list. Otherwise, follow the prompts to authorize Vercel to access your repositories and choose the correct one.

3.  **Vercel Project Configuration:**
    *   **Import Project:** Select the repository containing the `janitor` application.
    *   **Framework Detection:** Vercel will typically auto-detect that your project contains a Next.js application.
    *   **Framework Preset:** Ensure "Next.js" is selected as the framework preset.
    *   **Root Directory:** This is a crucial step. Click on "Edit" next to the Root Directory setting and change it from the default (repository root) to `janitor/`. This tells Vercel to look for the `janitor` application within this subdirectory.

4.  **Configure Environment Variables:**
    *   Once the project is created, navigate to your project in Vercel, then go to "Settings" > "Environment Variables".
    *   Add the following environment variables required for `basic-auth` (the middleware used in `janitor/middleware.js`):
        *   `BASIC_AUTH_USER`: Set this to your desired username.
        *   `BASIC_AUTH_PASSWORD`: Set this to your desired password.
        *   Ensure you select the appropriate environments (Production, Preview, Development) for these variables to be available.

5.  **Building and Deployment:**
    *   **Build Command:** With the Root Directory set to `janitor/`, Vercel will look for `janitor/package.json` and should automatically use the build command specified there (e.g., `next build`). You can verify this in the "Build & Development Settings" section of your project settings. If needed, you can override it, but the default `next build` (executed within the `janitor/` context) is usually correct.
    *   **Output Directory:** The output directory for the `janitor` application will be `janitor/.next` (relative to the repository root) or simply `.next` (relative to the specified `janitor/` root directory). Vercel handles this automatically.
    *   **Deployment Triggers:** Vercel automatically deploys your application when changes are pushed to your connected Git repository's main branch. By default, any push to this branch will trigger a deployment for all Vercel projects linked to that repository. You can configure "Ignored Build Step" settings under "Settings" > "Git" > "Ignored Build Step" if you want to prevent deployments of the janitor app when only other parts of the monorepo change (e.g., `git diff --quiet HEAD^ HEAD ./janitor`). This is an advanced configuration.

## Post-Deployment

Once your `janitor` application is successfully deployed:

1.  **Accessing the Deployed Application:**
    *   Vercel will provide you with a unique URL for the `janitor` application. You can find this URL on your project's dashboard in Vercel.

2.  **Basic Authentication:**
    *   When you (or anyone) tries to access the deployed `janitor` application URL, the `basic-auth` middleware will intercept the request.
    *   A native browser authentication dialog will pop up, prompting for a username and password.
    *   Enter the `BASIC_AUTH_USER` and `BASIC_AUTH_PASSWORD` values you configured in the environment variables to gain access.

This completes the deployment process for the `janitor` application. It should now be live on Vercel and protected by basic authentication.

---

# General Guidance for Vercel Deployments

This section provides general tips and references for managing your Vercel deployments.

## 1. Custom Domains

You can replace the default Vercel domain (e.g., `your-project.vercel.app`) with your own custom domain (e.g., `www.yourdomain.com`).

*   **Configuration:** Custom domains are configured within your Vercel project's settings. Navigate to your project on Vercel, go to "Settings", and then select "Domains".
*   **Documentation:** For detailed instructions on adding and configuring custom domains, refer to the official Vercel documentation: [Custom Domains](https://vercel.com/docs/projects/domains/custom-domains).

## 2. Vercel Documentation

Vercel provides comprehensive documentation covering a wide range of topics, from basic usage to advanced configurations.

*   **Resource:** For any questions, troubleshooting, or to learn more about Vercel's features, it's always recommended to consult the [official Vercel Documentation](https://vercel.com/docs).

## 3. Monitoring and Logs

Vercel offers built-in tools to help you monitor your deployed applications and diagnose issues.

*   **Dashboard Features:** Your Vercel project dashboard provides access to:
    *   **Real-time and historical logs:** Useful for debugging and understanding application behavior.
    *   **Analytics (if enabled):** Provides insights into traffic and performance.
    *   **Deployment statuses and history.**
*   **Importance:** These features are particularly helpful for maintaining and troubleshooting production applications, allowing you to quickly identify and address any problems that may arise.

This guidance applies to both the Marketing and Janitor applications, and any other projects you might deploy on Vercel.
