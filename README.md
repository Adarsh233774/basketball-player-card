# Basketball Player Card Component

This project includes a React component that displays information about a basketball player in a visually appealing card format. 

To run the project simply follow the below steps:- 
 1. Install dependencies: npm install
 2. Start the development server: npm start
 3. Open your browser and visit:http://localhost:3000
 
## Component Details

### BasketballPlayerCard

**Props:**
- `name` (string): The player's name.
- `image` (string): URL to the player's image.
- `position` (string): The player's position.
- `stats` (object): An object containing the player's stats (e.g., `{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }`).

### Example Usage

```jsx
<BasketballPlayerCard
    name="LeBron James"
    image="https://example.com/lebron.jpg"
    position="Forward"
    stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
/>

#### Notes
   1. Ensure you have Node.js and npm installed on your machine.
   2.The component is responsive and will adapt to different screen sizes.
