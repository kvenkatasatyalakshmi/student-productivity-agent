import json
from datetime import datetime, timedelta

def generate_schedule(tasks):
    schedule = []
    for task in tasks:
        deadline = datetime.strptime(task['deadline'], "%Y-%m-%d")
        days_left = (deadline - datetime.now()).days
        if days_left > 0:
            schedule.append({
                "subject": task['subject'],
                "hours_per_day": round(2 / days_left, 2)  # simple logic
            })
    return json.dumps(schedule)

# Example usage
tasks = [{"subject": "Math", "deadline": "2026-07-05"}]
print(generate_schedule(tasks))
