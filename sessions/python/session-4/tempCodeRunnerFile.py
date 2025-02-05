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