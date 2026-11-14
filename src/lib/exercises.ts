// Exercise library. Edit here; every muscle-group page is generated from this file.

export type Exercise = {
  slug: string;
  name: string;
  prescription: string;
  equipment: string;
  steps: string[];
};

export type Tip = { title: string; body: string };

export type MuscleGroup = {
  slug: string;
  name: string;
  focus: string;
  tagline: string;
  tips: Tip[];
  exercises: Exercise[];
};

export const groups: MuscleGroup[] = [
  {
    "slug": "abs",
    "name": "Abs",
    "focus": "Core",
    "tagline": "A six-pack is possible.",
    "tips": [
      {
        "title": "Quality over Quantity",
        "body": "Focus on proper form and controlled movements rather than speed"
      },
      {
        "title": "Breathe Properly",
        "body": "Exhale during the exertion phase and inhale during the release"
      },
      {
        "title": "Progressive Overload",
        "body": "Gradually increase reps, sets, or add resistance to continue building strength"
      }
    ],
    "exercises": [
      {
        "slug": "ab-wheel-rollouts",
        "name": "Ab Wheel Rollouts",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "Ab wheel",
        "steps": [
          "Kneel on floor holding ab wheel with both hands",
          "Roll forward slowly, extending arms and body",
          "Go as far as you can while maintaining form",
          "Use abs to pull yourself back to starting position"
        ]
      },
      {
        "slug": "bicycle-crunches",
        "name": "Bicycle Crunches",
        "prescription": "3 sets × 20 reps each side",
        "equipment": "None",
        "steps": [
          "Lie on back with hands behind head",
          "Bring right elbow to left knee while extending right leg",
          "Switch to left elbow to right knee",
          "Continue alternating in smooth cycling motion"
        ]
      },
      {
        "slug": "crunches",
        "name": "Crunches",
        "prescription": "3 sets × 15-20 reps",
        "equipment": "None",
        "steps": [
          "Lie on back with knees bent, feet flat on floor",
          "Place hands behind head lightly, don't pull neck",
          "Lift shoulders off ground using abs, exhale on the way up",
          "Lower slowly back down without touching shoulders to ground"
        ]
      },
      {
        "slug": "leg-raises",
        "name": "Leg Raises",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "None",
        "steps": [
          "Lie flat on back with legs straight",
          "Place hands under lower back for support",
          "Raise legs to 90 degrees keeping them straight",
          "Lower slowly without touching floor, repeat"
        ]
      },
      {
        "slug": "plank",
        "name": "Plank",
        "prescription": "3 sets × 30-60 seconds",
        "equipment": "None",
        "steps": [
          "Start in push-up position on forearms",
          "Hold body straight from head to heels",
          "Engage abs and breathe normally",
          "Keep hips level, don't let them sag or pike up"
        ]
      },
      {
        "slug": "russian-twists",
        "name": "Russian Twists",
        "prescription": "3 sets × 20 twists each side",
        "equipment": "None",
        "steps": [
          "Sit with knees bent, lean back to 45 degrees",
          "Lift feet off ground for advanced version",
          "Twist torso side to side, engaging obliques",
          "Touch ground beside hips with hands or weight"
        ]
      }
    ]
  },
  {
    "slug": "arms",
    "name": "Arms",
    "focus": "Biceps & triceps",
    "tagline": "Biceps, triceps, why not both?",
    "tips": [
      {
        "title": "Mind-Muscle Connection",
        "body": "Focus on feeling the target muscle working throughout each rep"
      },
      {
        "title": "Balance Training",
        "body": "Train both biceps and triceps equally for balanced arm development"
      },
      {
        "title": "Rest & Recovery",
        "body": "Allow 48-72 hours between intense arm sessions for optimal recovery"
      }
    ],
    "exercises": [
      {
        "slug": "bicep-curls",
        "name": "Bicep Curls",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Stand with dumbbells at your sides, palms facing forward",
          "Curl weights up by flexing your biceps",
          "Squeeze at the top of the movement",
          "Lower slowly to starting position"
        ]
      },
      {
        "slug": "diamond-push-ups",
        "name": "Diamond Push-ups",
        "prescription": "3 sets × 5-10 reps",
        "equipment": "None",
        "steps": [
          "Start in push-up position with hands forming a diamond shape",
          "Lower your body while keeping the diamond hand position",
          "Push back up to starting position",
          "Focus on tricep engagement"
        ]
      },
      {
        "slug": "hammer-curls",
        "name": "Hammer Curls",
        "prescription": "3 sets × 10-12 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Hold dumbbells with neutral grip (palms facing each other)",
          "Curl weights up without rotating your wrists",
          "Squeeze biceps at the top",
          "Lower with control"
        ]
      },
      {
        "slug": "pike-push-ups",
        "name": "Pike Push-ups",
        "prescription": "3 sets × 6-10 reps",
        "equipment": "None",
        "steps": [
          "Start in downward dog position",
          "Lower your head toward the ground",
          "Push back up to starting position",
          "Keep your legs as straight as possible"
        ]
      },
      {
        "slug": "push-ups",
        "name": "Push-ups",
        "prescription": "3 sets × 10-15 reps",
        "equipment": "None",
        "steps": [
          "Start in a plank position with hands slightly wider than shoulder-width",
          "Lower your body until chest nearly touches the floor",
          "Push back up to starting position",
          "Keep your core tight throughout the movement"
        ]
      },
      {
        "slug": "tricep-dips",
        "name": "Tricep Dips",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "Bench or chair",
        "steps": [
          "Sit on edge of a chair or bench, hands beside your hips",
          "Slide off the edge, supporting your weight with your arms",
          "Lower your body by bending your elbows to 90 degrees",
          "Push back up to starting position"
        ]
      }
    ]
  },
  {
    "slug": "back",
    "name": "Back",
    "focus": "Lats & posture",
    "tagline": "Look good from behind, too.",
    "tips": [
      {
        "title": "Proper Form",
        "body": "Focus on squeezing shoulder blades together and keeping core engaged"
      },
      {
        "title": "Mind Your Posture",
        "body": "Maintain neutral spine throughout all movements to prevent injury"
      },
      {
        "title": "Progressive Loading",
        "body": "Gradually increase resistance to continue building back strength"
      }
    ],
    "exercises": [
      {
        "slug": "bent-over-rows",
        "name": "Bent-over Rows",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Hinge at hips with dumbbells in hands",
          "Keep back straight and chest up",
          "Pull weights to ribcage",
          "Squeeze shoulder blades together"
        ]
      },
      {
        "slug": "bird-dog",
        "name": "Bird Dog",
        "prescription": "3 sets × 10 each side",
        "equipment": "None",
        "steps": [
          "Start on hands and knees",
          "Extend opposite arm and leg",
          "Hold for 2-3 seconds",
          "Return to start and repeat other side"
        ]
      },
      {
        "slug": "dead-hangs",
        "name": "Dead Hangs",
        "prescription": "3 sets × 20-30 seconds",
        "equipment": "Pull-up bar",
        "steps": [
          "Hang from bar with straight arms",
          "Engage shoulders and core",
          "Hold position as long as possible",
          "Build grip and lat strength"
        ]
      },
      {
        "slug": "pull-ups",
        "name": "Pull-ups",
        "prescription": "3 sets × 5-10 reps",
        "equipment": "Pull-up bar",
        "steps": [
          "Hang from bar with palms facing away",
          "Pull body up until chin clears bar",
          "Lower slowly with control",
          "Focus on engaging back muscles"
        ]
      },
      {
        "slug": "reverse-flyes",
        "name": "Reverse Flyes",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Bend forward at hips holding dumbbells",
          "Arms slightly bent at elbows",
          "Lift weights out to sides",
          "Squeeze shoulder blades together"
        ]
      },
      {
        "slug": "superman",
        "name": "Superman",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "None",
        "steps": [
          "Lie face down on ground",
          "Extend arms and legs",
          "Lift chest and legs off ground simultaneously",
          "Hold briefly then lower"
        ]
      }
    ]
  },
  {
    "slug": "cardio",
    "name": "Cardio",
    "focus": "Heart & lungs",
    "tagline": "Keep your heart beating longer.",
    "tips": [
      {
        "title": "Monitor Heart Rate",
        "body": "Stay within 65-85% of your maximum heart rate for optimal results"
      },
      {
        "title": "Stay Hydrated",
        "body": "Drink water before, during, and after your cardio sessions"
      },
      {
        "title": "Interval Training",
        "body": "Mix high-intensity bursts with recovery periods for maximum burn"
      }
    ],
    "exercises": [
      {
        "slug": "burpees",
        "name": "Burpees",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "None",
        "steps": [
          "Start in standing position, squat down and place hands on floor",
          "Jump feet back into plank position",
          "Do a push-up (optional for beginners)",
          "Jump feet forward and explosively jump up with arms overhead"
        ]
      },
      {
        "slug": "high-knees",
        "name": "High Knees",
        "prescription": "3 sets × 30 seconds",
        "equipment": "None",
        "steps": [
          "Stand tall with feet hip-width apart",
          "Run in place bringing knees toward chest",
          "Pump arms naturally as you would when running",
          "Maintain quick, light steps on the balls of feet"
        ]
      },
      {
        "slug": "jumping-jacks",
        "name": "Jumping Jacks",
        "prescription": "3 sets × 30 seconds",
        "equipment": "None",
        "steps": [
          "Stand upright with feet together and arms at sides",
          "Jump up spreading legs shoulder-width apart",
          "Simultaneously raise arms overhead",
          "Jump back to starting position and repeat quickly"
        ]
      },
      {
        "slug": "jump-rope",
        "name": "Jump Rope",
        "prescription": "3 sets × 60 seconds",
        "equipment": "Jump rope",
        "steps": [
          "Hold rope handles at hip level with elbows close to body",
          "Jump lightly on the balls of feet",
          "Turn rope with wrists, not whole arms",
          "Land softly and maintain steady rhythm"
        ]
      },
      {
        "slug": "mountain-climbers",
        "name": "Mountain Climbers",
        "prescription": "3 sets × 30 seconds",
        "equipment": "None",
        "steps": [
          "Start in plank position with arms straight",
          "Bring one knee toward chest quickly",
          "Quickly switch legs in running motion",
          "Keep core engaged and body straight throughout"
        ]
      },
      {
        "slug": "stair-climbing",
        "name": "Stair Climbing",
        "prescription": "3 sets × 2-3 minutes",
        "equipment": "Stairs",
        "steps": [
          "Find a staircase or use step platform",
          "Climb up at steady, brisk pace",
          "Use handrail for balance if needed",
          "Walk down slowly for recovery between sets"
        ]
      }
    ]
  },
  {
    "slug": "chest",
    "name": "Chest",
    "focus": "Pecs",
    "tagline": "Build a stronger, fuller chest.",
    "tips": [
      {
        "title": "Proper Form",
        "body": "Keep shoulders back and chest up for maximum muscle activation"
      },
      {
        "title": "Full Range Motion",
        "body": "Lower weights completely and squeeze at the top for best results"
      },
      {
        "title": "Progressive Overload",
        "body": "Gradually increase weight or reps to continue building strength"
      }
    ],
    "exercises": [
      {
        "slug": "chest-dips",
        "name": "Chest Dips",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "Dip bars or chairs",
        "steps": [
          "Use parallel bars or the edge of two chairs",
          "Lower your body by bending your elbows",
          "Lean slightly forward to target chest",
          "Push back up to starting position"
        ]
      },
      {
        "slug": "chest-squeeze",
        "name": "Chest Squeeze",
        "prescription": "3 sets × 15-20 reps",
        "equipment": "None",
        "steps": [
          "Press palms together in front of your chest",
          "Apply pressure and hold for 2 seconds",
          "Release pressure slightly",
          "Repeat the squeezing motion"
        ]
      },
      {
        "slug": "decline-push-ups",
        "name": "Decline Push-ups",
        "prescription": "3 sets × 6-10 reps",
        "equipment": "None",
        "steps": [
          "Place feet on an elevated surface",
          "Hands on ground in push-up position",
          "Lower chest toward the ground",
          "Push back up with control"
        ]
      },
      {
        "slug": "incline-push-ups",
        "name": "Incline Push-ups",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "None",
        "steps": [
          "Place hands on an elevated surface (bench, step, etc.)",
          "Keep body in straight line from head to feet",
          "Lower chest toward the elevated surface",
          "Push back up with control"
        ]
      },
      {
        "slug": "push-ups",
        "name": "Push-ups",
        "prescription": "3 sets × 10-15 reps",
        "equipment": "None",
        "steps": [
          "Start in a plank position with hands slightly wider than shoulder-width",
          "Lower your body until chest nearly touches the floor",
          "Push back up to starting position",
          "Keep your core tight throughout the movement"
        ]
      },
      {
        "slug": "wide-grip-push-ups",
        "name": "Wide-Grip Push-ups",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "None",
        "steps": [
          "Place hands wider than shoulder-width apart",
          "Lower body until chest nearly touches floor",
          "Focus on squeezing chest muscles",
          "Push back up explosively"
        ]
      }
    ]
  },
  {
    "slug": "legs",
    "name": "Legs",
    "focus": "Quads, glutes & calves",
    "tagline": "Skipping leg day is illegal.",
    "tips": [
      {
        "title": "Full Depth",
        "body": "Go through full range of motion for maximum muscle activation"
      },
      {
        "title": "Balance Training",
        "body": "Train both legs equally and focus on unilateral movements"
      },
      {
        "title": "Recovery Focus",
        "body": "Legs are large muscles - allow adequate recovery between sessions"
      }
    ],
    "exercises": [
      {
        "slug": "bulgarian-split-squats",
        "name": "Bulgarian Split Squats",
        "prescription": "3 sets × 8-12 each leg",
        "equipment": "Bench or step",
        "steps": [
          "Place rear foot on elevated surface behind you",
          "Lower into lunge position",
          "Most weight on front leg",
          "Drive through front heel to return up"
        ]
      },
      {
        "slug": "calf-raises",
        "name": "Calf Raises",
        "prescription": "3 sets × 15-20 reps",
        "equipment": "None",
        "steps": [
          "Stand on balls of feet",
          "Rise up onto toes as high as possible",
          "Hold briefly at top",
          "Lower slowly to starting position"
        ]
      },
      {
        "slug": "deadlifts",
        "name": "Deadlifts",
        "prescription": "3 sets × 6-8 reps",
        "equipment": "Barbell or dumbbells",
        "steps": [
          "Stand with feet hip-width apart",
          "Hinge at hips to lower weight",
          "Keep back straight and chest up",
          "Drive through heels to return upright"
        ]
      },
      {
        "slug": "lunges",
        "name": "Lunges",
        "prescription": "3 sets × 10 each leg",
        "equipment": "None",
        "steps": [
          "Step forward with one leg",
          "Lower hips until both knees at 90 degrees",
          "Keep front knee above ankle",
          "Push back to starting position"
        ]
      },
      {
        "slug": "squats",
        "name": "Squats",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "None",
        "steps": [
          "Stand with feet shoulder-width apart",
          "Lower hips back and down as if sitting in chair",
          "Keep chest up and knees behind toes",
          "Return to standing position"
        ]
      },
      {
        "slug": "wall-sit",
        "name": "Wall Sit",
        "prescription": "3 sets × 30-60 seconds",
        "equipment": "None",
        "steps": [
          "Lean back against wall",
          "Slide down until thighs parallel to ground",
          "Keep feet shoulder-width apart",
          "Hold position maintaining good form"
        ]
      }
    ]
  },
  {
    "slug": "shoulders",
    "name": "Shoulders",
    "focus": "Delts",
    "tagline": "Put muscle on your shoulders, not a chip.",
    "tips": [
      {
        "title": "Control Movement",
        "body": "Use controlled movements to avoid injury in this delicate joint"
      },
      {
        "title": "Train All Angles",
        "body": "Target front, side, and rear delts for complete development"
      },
      {
        "title": "Warm Up First",
        "body": "Always warm up shoulders thoroughly before heavy training"
      }
    ],
    "exercises": [
      {
        "slug": "arm-circles",
        "name": "Arm Circles",
        "prescription": "2 sets × 15 each direction",
        "equipment": "None",
        "steps": [
          "Extend arms out to sides",
          "Make small circles forward",
          "Reverse direction for backward circles",
          "Great for warming up shoulders"
        ]
      },
      {
        "slug": "front-raises",
        "name": "Front Raises",
        "prescription": "3 sets × 10-12 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Hold dumbbells in front of thighs",
          "Raise one arm forward to shoulder height",
          "Lower slowly and repeat with other arm",
          "Keep core stable throughout"
        ]
      },
      {
        "slug": "lateral-raises",
        "name": "Lateral Raises",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Hold dumbbells at sides with arms straight",
          "Raise arms out to sides until parallel to ground",
          "Lower slowly with control",
          "Keep slight bend in elbows"
        ]
      },
      {
        "slug": "pike-push-ups",
        "name": "Pike Push-ups",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "None",
        "steps": [
          "Start in downward dog position",
          "Lower head toward ground between hands",
          "Push back up to starting position",
          "Keep legs as straight as possible"
        ]
      },
      {
        "slug": "rear-delt-flyes",
        "name": "Rear Delt Flyes",
        "prescription": "3 sets × 12-15 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Bend forward at hips holding dumbbells",
          "Arms hanging down with slight bend",
          "Raise weights out to sides",
          "Focus on squeezing rear delts"
        ]
      },
      {
        "slug": "shoulder-press",
        "name": "Shoulder Press",
        "prescription": "3 sets × 8-12 reps",
        "equipment": "Dumbbells",
        "steps": [
          "Hold dumbbells at shoulder height",
          "Press weights straight up overhead",
          "Lower slowly back to shoulder level",
          "Keep core engaged throughout"
        ]
      }
    ]
  }
];

export const getGroup = (slug: string) => groups.find((g) => g.slug === slug);

export const totalExercises = groups.reduce((n, g) => n + g.exercises.length, 0);

export const isBodyweight = (e: Exercise) => e.equipment === "None";
