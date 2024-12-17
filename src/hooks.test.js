import { it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useDarkMode, useGeolocation } from "./hooks";

it("initializes darkMode based on localStorage", () => {
  // Arrange
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: vi.fn().mockReturnValue("dark"),
      setItem: vi.fn(),
    },
    writable: true
  });
  document.documentElement.classList.remove("dark-mode");

  // Act
  const { result } = renderHook(() => useDarkMode());

  // Assert
  expect(result.current.darkMode).toBe(true);
  expect(document.documentElement.classList.contains("dark-mode")).toBe(true);
});

it("sets coordinates from geolocation", async () => {
  // Arrange
  global.navigator.geolocation = {
    getCurrentPosition: vi.fn().mockImplementation((success) => {
      success({ coords: { latitude: 10, longitude: 20 } });
    }),
  };

  // Act
  const { result } = renderHook(() => useGeolocation());

  // Assert
  expect(result.current.coords).toEqual({ lat: 10, lng: 20 });
});