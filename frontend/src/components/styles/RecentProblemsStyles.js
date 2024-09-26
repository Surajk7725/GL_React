import styled from 'styled-components';

const RecentProblemsStyles = styled.div`
  .problem-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 1rem;
  }

  .problem {
    background-color: #1f2937; /* Dark background */
    color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    text-align: center;
    width: 100%;
    max-width: 300px;
  }

  .problem:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.75rem;
    color: #9ca3af;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export default RecentProblemsStyles;
