class Bicycle
  attr_reader :size, :tape_color

  def initialize(**opts)
    @size = opts[:size]
    @tape_color = opts[:tape_color]
  end

  # every bike has the same defaults for tire and chain size
  def spares
    {
      chain: '11-speed',
      tire_size: '23',
      tape_color: tape_color
    }
  end

  # Many other methods...
end

puts Bicycle.new(size: 'M', tape_color: 'red').spares()