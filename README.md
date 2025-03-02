# Project: Shopping Cart ([assignment link](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart))

## Technology Stack & Setup

### Built with:
- **Frontend**: React (Vite) with React Router, Redux Toolkit (previously Context API) for state management, and Tailwind CSS for styling.  
- **Backend (Mocked)**: Uses [Fake Store API](https://fakestoreapi.com/) for product and user data.  
- **Data Fetching**: Fetch API for asynchronous requests.  

> **Note:** This project originally used Context API for state management but was migrated to Redux Toolkit for better scalability. The last version using Context API is available under the [`context-api-version`](https://github.com/mangorango144/shopping-cart/tree/context-api-version) tag.

## Component Structure:

- **Global Components**  
  - Navbar  
  - Footer  
  - AuthGuard  
  - CartStatus  
  - UserStatus  
- **Home**  
- **Shop**  
  - Products  
    - ProductDetails  
  - ShoppingCart  
    - Order  
    - PaymentSummary  
    - Delivery  
    - AdditionalService  
    - PaymentForm 

### Setup Instructions:
1. Clone the repository:  
   ```sh
   git clone https://github.com/mangorango144/shopping-cart.git
   cd shopping-cart
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the development server:  
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173/` in your browser.
