export type ActionType = 'approach' | 'walk'

export const isActionType = (x: string): x is ActionType => ['approach', 'walk'].includes(x)

export type ApproachAction = {
  type: 'approach';
  payload: string;
}

export type WalkAction = {
  type: 'walk';
  payload: string;
}

export type Action = ApproachAction | WalkAction;
