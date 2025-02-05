"""
# Queue Data Structure

A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.

## Queue class 1

We need to implement a Python class that represents the queue data structure. The class should have these operations:

   - `insert(value)`: Inserts a new value at the rear of the queue.
   - `pop()`: Returns and removes a value from the front of the queue. We should return `None` and print a warning message if we try to pop a value from an empty queue.
   - `is_empty()`: Returns `True` or `False` to represent whether the queue is empty or not.
"""

class Queue:
  def __init__(self):
    self.queue = []
  def	insert(self,val):
    self.queue.append(val)
  def pop(self):
    if len(self.queue) == 0:
      print("Can't pop from an empty queue")
      return None
    else: self.queue.pop(0)
  def is_empty(self):
    return len(self.queue) == 0
  def getQueue(self):
    return self.queue


q1 = Queue()
q1.insert(1)
q1.insert(2)
q1.insert(3)

q1.pop()
q1.pop()

q1.insert(4)
q1.insert(5)
print(q1.getQueue())

print(q1.is_empty())
q1.pop()
q1.pop()
print(q1.getQueue())
print(q1.is_empty())

q1.pop()
print(q1.is_empty())

print('='*50)

"""
## Queue class 2

We need to implement another queue class that has the same properties as the previous but with the following changes:

   - The queue should have a name that is provided as a parameter of its constructor.
   - The queue should have a size that is provided as a parameter of its constructor and if we try to insert more values than its size, it raises a custom exception called `QueueOutOfRangeException` (BONUS) or raises `IndexError` with a message.
   - The queue keeps track of all queue instances that have been created through this class and we can get any queue of them using its name.
   - The queue class should have two class methods called `save` and `load` which saves all created queue instances to a file and loads them when needed.
"""

import pickle

class QueueOutOfRangeException(Exception):
    def __init__(self, message):
        super().__init__(message)

class Queue2:
    _instances = {}

    def __init__(self, name, size):
        self.queue = []
        self.name = name
        self.size = size
        Queue2._instances[name] = self

    def insert(self, item):
        if self.is_size_exceed():
            raise QueueOutOfRangeException(f"ERROR! The queue '{self.name}' is full.")
        else:
            self.queue.append(item)

    def is_empty(self):
        return len(self.queue) == 0

    def remove(self):
        if self.is_empty():
            print("Be careful you are deleting an empty list")
        else:
            self.queue.pop(0)

    def is_size_exceed(self):
        return len(self.queue) >= self.size

    @classmethod
    def get_queue_by_name(cls, name): 
        return cls._instances.get(name, None)

    @classmethod
    def list_all_queues(cls):
        return list(cls._instances.keys())

    @classmethod
    def save(cls, file_path="queues.pkl"):
        try:
            with open(file_path, "wb") as file:
                pickle.dump(cls._instances, file)
            print(f"All queues have been saved to '{file_path}'.")
        except Exception as e:
            print(f"Failed to save queues: {e}")

    @classmethod
    def load(cls, file_path="queues.pkl"):
        try:
            with open(file_path, "rb") as file:
                cls._instances = pickle.load(file)
            print(f"All queues have been loaded from '{file_path}'.")
        except Exception as e:
            print(f"Failed to load queues: {e}")


q1 = Queue2("queue1", 3)
q2 = Queue2("queue2", 5)


q1.insert(1)
q1.insert(2)
q2.insert(10)
q2.insert(20)

print(Queue2.list_all_queues())

Queue2.save()
Queue2._instances = {}
print(Queue2._instances)
Queue2.load()
print(Queue2.list_all_queues())