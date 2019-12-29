# Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

# HH = hours, padded to 2 digits, range: 00 - 99
# MM = minutes, padded to 2 digits, range: 00 - 59
# SS = seconds, padded to 2 digits, range: 00 - 59
# The maximum time never exceeds 359999 (99:59:59)

# You can find some examples in the test fixtures.

defmodule Day_1 do

  def pad(number) do
    if number < 10, do: "0" + number, else: number
  end
  
  def humanReadable(totalSeconds) do
    hours = :math.floor(totalSeconds / 3600)
    IO.puts "#{hours} hours"
    minutes = :math.floor(rem(totalSeconds, 3600) / 60)
    IO.puts "#{minutes} minutes"
    seconds = :math.floor(rem(totalSeconds, 60))
    IO.puts "#{minutes} seconds"
    "#{hours}:#{minutes}:#{seconds}"
  end

end

IO.puts "FINAL AMOUNT |>  #{Day_1.humanReadable(359999)}"