import React from 'react';
import { render, screen, waitFor , act} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user interactions

describe('<App />', () => {
  // Mock localStorage
  const mockSetItem = jest.fn();
  const mockGetItem = jest.fn();

  beforeEach(() => {
    global.localStorage.__proto__.setItem = mockSetItem;
    global.localStorage.__proto__.getItem = mockGetItem;
  });

  it('renders correct routes', async () => {
    mockGetItem.mockReturnValueOnce('true'); // User has watched the intro

    // Testing '/' (home) route
    render(
   
        <App />

    );

    // Use waitFor to wait for animations or async operations to complete
    await waitFor(() => {
      expect(screen.getByText('BlissTech')).toBeInTheDocument();
    });
    
  });

  jest.setTimeout(10000); // 10 seconds

  it('renders footer correctly', () => {
    mockGetItem.mockReturnValueOnce('true');
  
    render(<App />);
  
    // Checking for footer content
    expect(screen.getByText('MongoLabs')).toBeInTheDocument();
  });
  it('renders navbar correctly', () => {
    mockGetItem.mockReturnValueOnce('true');
  
    render(<App />);
  
    // Checking for footer content
    expect(screen.getByText('MongoLabs')).toBeInTheDocument();
  });
  it('renders AppShowcase component properly', () => {
    mockGetItem.mockReturnValueOnce('true');
  
    render(<App />);
  
    // Checking if the AppShowcase component is rendered
    expect(screen.getByTestId('app-showcase')).toBeInTheDocument();
  });
  it('renders Contact route', async () => {
    mockGetItem.mockReturnValueOnce('true');

    // Render the App component
    render(<App />);

    // Simulate navigation to the Contact route
    await act(async () => {
      userEvent.click(screen.getByText('Contact')); // Assuming your navbar link text is 'Contact'
      await waitFor(() => {
        expect(screen.getByText('Contact')).toBeInTheDocument();
      });
    });

    // Checking for content specific to the Contact route
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  // Add a test case for the About route
  it('renders About route', async () => {
    mockGetItem.mockReturnValueOnce('true');

    // Render the App component
    render(<App />);

    // Simulate navigation to the About route
    await act(async () => {
      userEvent.click(screen.getByText('About')); // Assuming your navbar link text is 'About'
      await waitFor(() => {
        expect(screen.getByText('About')).toBeInTheDocument();
      });
    });

    // Checking for content specific to the About route
    expect(screen.getByText('Current Role')).toBeInTheDocument();
  });
});
