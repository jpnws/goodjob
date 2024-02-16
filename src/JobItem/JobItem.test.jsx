import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import JobItemWrapper from "./JobItemWrapper";

vi.mock("react-router-dom", () => {
  return {
    ...vi.importActual("react-router-dom"),
    useParams: () => ({
      jobId: "22969be6-4524-4a8e-8f05-a52ae17a6ebf",
    }),
  };
});

describe("Show the job application editor", () => {
  it("populates job application data in form", () => {
    const mockSubmitHandler = vi.fn();
    const jobApplications = [
      {
        id: "22969be6-4524-4a8e-8f05-a52ae17a6ebf",
        jobTitle: "Software Engineer",
        company: "TechCorp",
        jobPost: "https://example.com/job/12345",
        applicationDate: "2023-01-16",
        applicationStatus: "Applied",
        createdAt: "2023-01-15T12:34:56",
      },
      {
        id: "9f0e6388-be82-47e1-9f9a-f2105b144cf0",
        jobTitle: "Data Analyst",
        company: "DataWise",
        jobPost: "https://example.com/job/12346",
        applicationDate: "2023-02-11",
        applicationStatus: "Interview Scheduled",
        createdAt: "2023-02-10T09:20:30",
      },
      {
        id: "29c61405-9ce6-48d6-9232-69b2406f8b7e",
        jobTitle: "Product Manager",
        company: "Innovate Solutions",
        jobPost: "https://example.com/job/12347",
        applicationDate: "2023-03-06",
        applicationStatus: "Under Review",
        createdAt: "2023-03-05T14:12:08",
      },
    ];
    const jobItem = {
      id: "22969be6-4524-4a8e-8f05-a52ae17a6ebf",
      jobTitle: "Software Engineer",
      company: "TechCorp",
      jobPost: "https://example.com/job/12345",
      applicationDate: "2023-01-16",
      applicationStatus: "Applied",
      createdAt: "2023-01-15T12:34:56",
    };
    render(
      <JobItemWrapper
        onJobUpdate={mockSubmitHandler}
        jobApplications={jobApplications}
      />
    );
    expect(screen.getByDisplayValue(jobItem.jobTitle)).toBeInTheDocument();
    expect(screen.getByDisplayValue(jobItem.company)).toBeInTheDocument();
    expect(screen.getByDisplayValue(jobItem.jobPost)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(jobItem.applicationDate)
    ).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(jobItem.applicationStatus)
    ).toBeInTheDocument();
  });

  it("handles form submission correctly", async () => {
    const mockSubmitHandler = vi.fn();
    const jobApplications = [
      {
        id: "22969be6-4524-4a8e-8f05-a52ae17a6ebf",
        jobTitle: "Software Engineer",
        company: "TechCorp",
        jobPost: "https://example.com/job/12345",
        applicationDate: "2023-01-16",
        applicationStatus: "Applied",
        createdAt: "2023-01-15T12:34:56",
      },
      {
        id: "9f0e6388-be82-47e1-9f9a-f2105b144cf0",
        jobTitle: "Data Analyst",
        company: "DataWise",
        jobPost: "https://example.com/job/12346",
        applicationDate: "2023-02-11",
        applicationStatus: "Interview Scheduled",
        createdAt: "2023-02-10T09:20:30",
      },
      {
        id: "29c61405-9ce6-48d6-9232-69b2406f8b7e",
        jobTitle: "Product Manager",
        company: "Innovate Solutions",
        jobPost: "https://example.com/job/12347",
        applicationDate: "2023-03-06",
        applicationStatus: "Under Review",
        createdAt: "2023-03-05T14:12:08",
      },
    ];
    render(
      <JobItemWrapper
        onJobUpdate={mockSubmitHandler}
        jobApplications={jobApplications}
      />
    );
    await userEvent.click(screen.getByRole("button", { name: /save/i }));
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});
