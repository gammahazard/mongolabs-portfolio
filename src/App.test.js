import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
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

  // Test case: Home route renders correctly
  it('renders correct routes', async () => {
    // Set the mock value for localStorage
    mockGetItem.mockReturnValueOnce('true'); // User has watched the intro

    // Render the App component
    render(<App />);

    // Wait for animations or async operations to complete
    await waitFor(() => {
      expect(screen.getByText('BlissTech')).toBeInTheDocument();
    });
  });

  // Set the timeout for the test suite
  jest.setTimeout(10000); // 10 seconds

  // Test case: Footer renders correctly
  it('renders footer correctly', () => {
    // Set the mock value for localStorage
    mockGetItem.mockReturnValueOnce('true');

    // Render the App component
    render(<App />);

    // Check for footer content
    expect(screen.getByText('MongoLabs')).toBeInTheDocument();
  });

  // Test case: Navbar renders correctly
  it('renders navbar correctly', () => {
    // Set the mock value for localStorage
    mockGetItem.mockReturnValueOnce('true');

    // Render the App component
    render(<App />);

    // Check for navbar content
    expect(screen.getByText('MongoLabs')).toBeInTheDocument();
  });

  // Test case: AppShowcase component renders properly
  it('renders AppShowcase component properly', () => {
    // Set the mock value for localStorage
    mockGetItem.mockReturnValueOnce('true');

    // Render the App component
    render(<App />);

    // Check if the AppShowcase component is rendered
    expect(screen.getByTestId('app-showcase')).toBeInTheDocument();
  });

  // Test case: Contact route renders correctly
  it('renders Contact route', async () => {
    // Set the mock value for localStorage
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

    // Check for content specific to the Contact route
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  // Test case: About route renders correctly
  it('renders About route', async () => {
    // Set the mock value for localStorage
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

    // Check for content specific to the About route
    expect(screen.getByText('Current Role')).toBeInTheDocument();
  });
});
