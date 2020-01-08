# You are going to be given an array of integers. Your job is to take
# that array and find an index N where the sum of the integers to the
# left of N is equal to the sum of the integers to the right of N. If 
# there is no index that would make this happen, return -1.

# [1,2,3,4,3,2,1] = 4
# [1,2,3,4,5,6,7] = -1

defmodule Day_2 do
  
  def equal_sides(acc \\ 0, array) do
    [head | tail] = array
    tailSum = Enum.reduce(tail, fn(a,c) -> a + c end)

    IO.puts "🏝 ACC = #{acc} \n  🏵 TAIL = #{tailTotal}"

    if (acc == tailSum) do
    # is the current acc value is equal to SUM of TAIL ??? then return the HEAD dammit
      head
    else
    # if not, recursively call the equal_sides with the HEAD + acc value && the current TAIL
      equal_sides(acc + head, tail)
    end
  end

end

IO.puts "RESULTING MIDDLE INDEX |>  #{Day_2.equal_sides([1,2,3,4,5,15,1,14])}"