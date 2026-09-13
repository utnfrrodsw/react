## Purpose

Lets users browse the `hook-use-effect` teaching examples at runtime by switching between them with a UI control, without editing or re-deploying code.

## ADDED Requirements

### Requirement: Demo navigation control

The app SHALL render a set of navigation controls that let the user select which teaching example is displayed. The controls MUST appear in this order:

1. MemeFetcher
2. MemeFetcherV2
3. MemeFetcherV3
4. Productos

The app SHALL display exactly one example at a time, and the selected example MUST change to match the last control clicked by the user.

#### Scenario: User opens the app

- **WHEN** the app loads with no previous selection
- **THEN** the MemeFetcher example is displayed and the MemeFetcher control is marked as selected

#### Scenario: User switches to MemeFetcherV3

- **WHEN** the user clicks the "MemeFetcherV3" control
- **THEN** the app unmounts the current example, mounts MemeFetcherV3, and marks the MemeFetcherV3 control as selected

#### Scenario: User switches to Productos

- **WHEN** the user clicks the "Productos" control
- **THEN** the app unmounts the current example and mounts the Productos component

### Requirement: Selected example state

The currently selected example MUST be tracked in component state so that switching does not require reloading the page and works entirely at runtime.

#### Scenario: Switching back to a previously shown example

- **WHEN** the user has switched to Productos and then clicks the "MemeFetcher" control
- **THEN** the MemeFetcher example mounts again without a page reload

### Requirement: Mount/unmount control

The app SHALL provide a toggle control that mounts and unmounts the currently selected example, so the mount/unmount lifecycle and effect cleanup can be demonstrated. When the example is unmounted, the app SHALL show a message explaining that it is unmounted instead of rendering it.

#### Scenario: User hides the selected example

- **WHEN** the user clicks the toggle control while an example is mounted
- **THEN** the example is unmounted (its effect cleanup runs) and a message is shown in its place

#### Scenario: User shows the selected example again

- **WHEN** the user clicks the toggle control while the example is hidden
- **THEN** the example mounts again and the hidden message is removed

### Requirement: Data-fetching state safety after abort

A data-fetching effect that is aborted (component unmount, or StrictMode's mount-cleanup-remount cycle) MUST NOT write loading/error/data state after the abort. A component that reads its fetched data SHALL never receive a "not loading, no error, no data" combination that would crash when accessing the data.

#### Scenario: StrictMode remounts a fetch component

- **WHEN** a component using the custom fetch hook mounts in development StrictMode (effect runs, cleans up, runs again) and the first request is aborted
- **THEN** the second request completes and renders the data without the app crashing or going blank

#### Scenario: User unmounts mid-fetch

- **WHEN** the user hides an example while its fetch is still in flight and then shows it again
- **THEN** the aborted fetch does not update stale state and the remount fetches fresh data without crashing

### Requirement: React Query provider available app-wide

The application root SHALL always be wrapped in a `QueryClientProvider` configured with a `QueryClient`, so that any example using React Query (`MemeFetcherV3` and `Productos`) works without additional setup.

#### Scenario: MemeFetcherV3 selected

- **WHEN** the user selects the MemeFetcherV3 example
- **THEN** it fetches memes via React Query without throwing a "no QueryClient" error

#### Scenario: Productos selected

- **WHEN** the user selects the Productos example
- **THEN** it loads and lists products via React Query without throwing a "no QueryClient" error
