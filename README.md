# Component Pathing #
- src
 - Components
  - Header
    - HeaderSm
    - HeaderMd
  - Body
    - Left
      - FleetDisplay
        - Name
        - Points
      - Game
        - SelectedShips
        - ShipSquad
          - AddShip
          - AddSquadron
        - Objectives
          - ObjectiveButtons
        - BottomButtons
    - Right
      - Ships
      - Squadrons
      - AssaultCards
      - DefenseCards
      - NavigationCards
  
  
# Basic Explanation #
## Left Side ##
- All buttons are `<Link to ="/x"/>` JSX from React Router
- Upon click, path changes to designated card display 
- No state changes other than displaying the selected ships
- Chosen ships will live in `SelectedShips` component

## Right Side ##
- Display changes based on which button on the `Left` side was clicked
- Each card has an event listener (that is not currently doing what its supposed to do, but is outputting on click)
- Card types are displayed from Routes
- `'/ships'` displays the ship cards

  
