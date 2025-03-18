// QuickSort Visualization - Simplified Version

// Variables
let array = [];
let arraySize = 30;
let minValue = 5;
let maxValue = 100;
let comparisons = 0;
let swaps = 0;
let animationSpeed = 200;
let animationId = null;
let isPaused = false;
let quickSortSteps = [];
let currentStep = 0;

// DOM Elements
const arrayContainer = document.getElementById("array-container");
const newArrayBtn = document.getElementById("new-array");
const startSortBtn = document.getElementById("start-sort");
const pauseResumeBtn = document.getElementById("pause-resume");
const speedControl = document.getElementById("speed");
const currentStepEl = document.getElementById("current-step");
const comparisonsEl = document.getElementById("comparisons");
const swapsEl = document.getElementById("swaps");

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  generateRandomArray();
  setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
  newArrayBtn.addEventListener("click", generateRandomArray);
  startSortBtn.addEventListener("click", startSorting);
  pauseResumeBtn.addEventListener("click", togglePause);
  speedControl.addEventListener("input", updateSpeed);
}

// Generate a random array
function generateRandomArray() {
  // Reset everything
  resetVisualization();

  // Generate new array
  array = [];
  for (let i = 0; i < arraySize; i++) {
    const value =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    array.push(value);
  }

  updateUI();
  currentStepEl.textContent =
    "Array generated. Click 'Visualize Quicksort' to begin.";
}

// Reset visualization state
function resetVisualization() {
  if (animationId) {
    clearTimeout(animationId);
    animationId = null;
  }

  comparisons = 0;
  swaps = 0;
  currentStep = 0;
  quickSortSteps = [];
  isPaused = false;

  startSortBtn.disabled = false;
  pauseResumeBtn.disabled = true;
  pauseResumeBtn.textContent = "Pause";

  comparisonsEl.textContent = "0";
  swapsEl.textContent = "0";
}

// Update UI with current array
function updateUI() {
  arrayContainer.innerHTML = "";

  const maxArrayValue = Math.max(...array);
  const barWidth = Math.min(30, arrayContainer.clientWidth / array.length - 4);

  array.forEach((value, index) => {
    const height = (value / maxArrayValue) * 250;

    const bar = document.createElement("div");
    bar.classList.add("array-bar");
    bar.style.height = `${height}px`;
    bar.style.width = `${barWidth}px`;

    const valueLabel = document.createElement("div");
    valueLabel.classList.add("array-bar-value");
    valueLabel.textContent = value;

    bar.appendChild(valueLabel);
    bar.setAttribute("data-value", value);
    bar.setAttribute("data-index", index);

    arrayContainer.appendChild(bar);
  });
}

// Update animation speed
function updateSpeed() {
  animationSpeed = 1010 - speedControl.value;
}

// Toggle pause/resume
function togglePause() {
  isPaused = !isPaused;
  pauseResumeBtn.textContent = isPaused ? "Resume" : "Pause";

  if (!isPaused) {
    continueAnimation();
  }
}

// Start sorting visualization
function startSorting() {
  resetVisualization();

  startSortBtn.disabled = true;
  pauseResumeBtn.disabled = false;

  // Generate all steps for quicksort
  const arrayCopy = [...array];
  quickSortSteps = [];
  generateQuickSortSteps(arrayCopy, 0, arrayCopy.length - 1);

  currentStepEl.textContent = "Starting Quicksort visualization...";

  // Begin animation
  animateQuickSort();
}

// Generate steps for quicksort algorithm
function generateQuickSortSteps(arr, start, end) {
  if (start >= end) {
    if (start === end) {
      quickSortSteps.push({
        type: "markSorted",
        index: start,
      });
    }
    return;
  }

  // Select pivot (last element)
  quickSortSteps.push({
    type: "selectPivot",
    index: end,
    message: `Selected pivot: ${arr[end]}`,
  });

  // Partition
  let pivotValue = arr[end];
  let partitionIndex = start;

  for (let i = start; i < end; i++) {
    quickSortSteps.push({
      type: "compare",
      indices: [i, end],
      message: `Comparing ${arr[i]} with pivot ${pivotValue}`,
    });

    if (arr[i] <= pivotValue) {
      if (i !== partitionIndex) {
        quickSortSteps.push({
          type: "swap",
          indices: [i, partitionIndex],
          message: `Swap ${arr[i]} and ${arr[partitionIndex]}`,
        });
        [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
      }
      partitionIndex++;
    }
  }

  // Place pivot in correct position
  if (partitionIndex !== end) {
    quickSortSteps.push({
      type: "swap",
      indices: [partitionIndex, end],
      message: `Place pivot ${pivotValue} at its correct position`,
    });
    [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
  }

  quickSortSteps.push({
    type: "markSorted",
    index: partitionIndex,
    message: `Element ${arr[partitionIndex]} is now in its correct position`,
  });

  // Recursively sort subarrays
  generateQuickSortSteps(arr, start, partitionIndex - 1);
  generateQuickSortSteps(arr, partitionIndex + 1, end);
}

// Animate quicksort visualization
function animateQuickSort() {
  if (isPaused) return;

  if (currentStep >= quickSortSteps.length) {
    completeSorting();
    return;
  }

  const step = quickSortSteps[currentStep];
  let bars = document.querySelectorAll(".array-bar"); // Changed to let

  // Reset comparing status
  bars.forEach((bar) => {
    bar.classList.remove("pivot", "comparing");
  });

  // Update current step message
  currentStepEl.textContent = step.message || "Performing quicksort...";

  switch (step.type) {
    case "selectPivot":
      bars[step.index].classList.add("pivot");
      break;

    case "compare":
      step.indices.forEach((index) => {
        bars[index].classList.add("comparing");
      });
      comparisons++;
      comparisonsEl.textContent = comparisons;
      break;

    case "swap":
      const [i, j] = step.indices;
      swaps++;
      swapsEl.textContent = swaps;

      // Perform the swap in the actual array
      [array[i], array[j]] = [array[j], array[i]];
      updateUI();

      // Error here - trying to reassign const variable
      bars = document.querySelectorAll(".array-bar");
      bars[i].classList.add("comparing");
      bars[j].classList.add("comparing");
      break;
  }

  // case "markSorted":
  //   bars[step.index].classList.add("sorted");
  //   break;

  currentStep++;
  animationId = setTimeout(animateQuickSort, animationSpeed);
}

// Continue animation after pause
function continueAnimation() {
  if (!isPaused) {
    animateQuickSort();
  }
}

// Mark completion of sorting
function completeSorting() {
  // Mark all elements as sorted
  const bars = document.querySelectorAll(".array-bar");
  bars.forEach((bar) => {
    bar.classList.add("sorted");
  });

  // Check if array is sorted correctly
  if (isSorted(array)) {
    currentStepEl.textContent = "Array successfully sorted!";
  } else {
    currentStepEl.textContent = "Warning: Array may not be properly sorted.";
  }

  // Update button states
  pauseResumeBtn.disabled = true;
}

// Check if array is sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
