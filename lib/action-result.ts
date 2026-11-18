export type ActionErrorCode =
  | "VALIDATION"
  | "SESSION_EXPIRED"
  | "NOT_FOUND"
  | "LIMIT_REACHED"
  | "RATE_LIMITED"
  | "WRITES_DISABLED"
  | "SIMULATED_ERROR"
  | "INTERNAL";

export type ActionResult<T = unknown> =
  | { ok: true; data?: T }
  | {
      ok: false;
      code: ActionErrorCode;
      message: string;
      fieldErrors?: Record<string, string[]>;
    };
